import { customElement, property } from "lit/development/decorators";
import { html, LitElement } from "lit/development";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-icon")
export class UbIcon extends LitElement {
  @property({ type: String })
  label = ""; //TODO label => titleとか？

  @property({ type: String })
  color?: "black" | "white" = "black"; //TODO primitiveな名前でいいのか？

  @property({ type: String })
  size?: "small" | "medium" | "large" = "medium";

  static viewBox = 20;
  static path = "";

  static override styles = [styles];

  render() {
    return html`
      <svg
        aria-label="${this.label}"
        class="${this.allStyles()}"
        viewBox="0 0 ${UbIcon.viewBox} ${UbIcon.viewBox}"
      >
        <title>${this.label}</title>
        <path d="${UbIcon.path}" />
      </svg>
    `;
  }

  allStyles = () => {
    const styles = ["spdsIcon"]; //TODO class名変える
    switch (this.color) {
      case "black":
        styles.push("color__black");
        break;
      case "white":
        styles.push("color__white");
        break;
      default:
        styles.push("color__black");
        break;
    }
    switch (this.size) {
      case "small":
        styles.push("size__small");
        break;
      case "medium":
        styles.push("size__medium");
        break;
      case "large":
        styles.push("size__large");
        break;
      default:
        styles.push("size__medium");
        break;
    }
    return styles.join(" ");
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-icon": UbIcon;
  }
}
