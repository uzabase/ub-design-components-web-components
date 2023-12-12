import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-icon")
export class UbIcon extends LitElement {
  @property({ type: String })
  text = "";

  @property({ type: String })
  type = "";

  @property({ type: String })
  size?: "small" | "medium" = "medium";

  viewBox = 24;
  paths: Object;

  static override styles = [styles];

  render() {
    return html`
      <svg
        aria-label="${this.text}"
        class="icon ${this.size === "small" ? "size__small" : "size__medium"}"
        viewBox="0 0 ${this.viewBox} ${this.viewBox}"
      >
        <title>${this.text}</title>
        <path d="${this.paths[this.type]}" />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-icon": UbIcon;
  }
}
