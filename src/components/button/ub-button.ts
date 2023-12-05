// @ts-ignore
import resetStyle from "@acab/reset.css" assert { type: "css" };

type ButtonType = "default" | "destructive" | null;
type Appearance = "outline" | "fill" | "text" | null;
type Size = "medium" | "large" | "xLarge" | "width160" | "width80" | null;

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

const render = (x) => ` 
<button class="${x.allStyles()}" ${
  x.disabled && "disabled"
} data-testid="button">
  <span class="base__label">${x.label}</span>
</button>
`;

export class UbButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = render(this);
  }

  attributeChangedCallback() {
    this.shadowRoot.querySelector("button").setAttribute("class", this.allStyles()) // classListにaddするので重複が消えるかどうか見る
    this.shadowRoot!.innerHTML = render(this);
  }

  get label() {
    return this.getAttribute("label") || "";
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  get loading() {
    return this.getAttribute("loading") === "true";
  }

  set loading(value: boolean) {
    this.setAttribute("loading", value + "");
  }

  get selected() {
    return this.getAttribute("selected") === "true";
  }

  set selected(value: boolean) {
    this.setAttribute("selected", value + "");
  }

  get disabled() {
    return this.getAttribute("disabled") === "true";
  }

  set disabled(value: boolean) {
    this.setAttribute("disabled", value + "");
  }

  get type() {
    return this.getAttribute("type") as ButtonType;
  }

  set type(value: ButtonType) {
    this.setAttribute("type", value !== null ? value : "default");
  }

  get appearance() {
    return this.getAttribute("appearance") as Appearance;
  }

  set appearance(value: Appearance) {
    this.setAttribute("appearance", value !== null ? value : "outline");
  }

  get size() {
    return this.getAttribute("size") as Size;
  }

  set size(value: Size) {
    this.setAttribute("size", value !== null ? value : "medium");
  }

  static get observedAttributes() {
    return [
      "label",
      "loading",
      "selected",
      "disabled",
      "type",
      "appearance",
      "size",
    ];
  }

  allStyles = () => {
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

customElements.get("ub-button") || customElements.define("ub-button", UbButton);
