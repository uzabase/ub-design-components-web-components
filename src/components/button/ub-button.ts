import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-button")
export class UbButton extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  loading? = false;

  @property({ type: Boolean })
  selected? = false;

  @property({ type: Boolean })
  disabled? = false;

  @property({ type: String })
  type?: "default" | "destructive" = "default";

  @property({ type: String })
  appearance?: "outline" | "fill" | "text" = "outline";

  @property({ type: String })
  size?: "medium" | "large" | "xLarge" | "width160" | "width80" = "medium";

  static override styles = [styles];

  render() {
    return html`
      <button
        class="${this.allStyles()}"
        .disabled=${this.disabled || this.loading}
      >
        <span class="base__label">${this.label}</span>
      </button>
    `;
  }

  private allStyles = () => {
    const styles = ["base"];
    switch (this.type) {
      case "default":
        styles.push("type__default");
        break;
      case "destructive":
        styles.push("type__destructive");
        break;
      default:
        styles.push("type__default");
        break;
    }
    switch (this.appearance) {
      case "outline":
        styles.push("appearance__outline");
        break;
      case "fill":
        styles.push("appearance__fill");
        break;
      case "text":
        styles.push("appearance__text");
        break;
      default:
        styles.push("appearance__outline");
        break;
    }
    switch (this.size) {
      case "medium":
        styles.push("size__medium");
        break;
      case "large":
        styles.push("size__large");
        break;
      case "xLarge":
        styles.push("size__xLarge");
        break;
      case "width160":
        styles.push("size__width160");
        break;
      case "width80":
        styles.push("size__width80");
        break;
      default:
        styles.push("size__medium");
        break;
    }
    if (this.disabled) styles.push("isDisable");
    if (this.selected) styles.push("isSelected");
    if (this.loading) styles.push("isLoading");

    return styles.join(" ");
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-button": UbButton;
  }
}
