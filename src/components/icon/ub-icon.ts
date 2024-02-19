// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

type Size = "small" | "medium";

export class UbIcon extends HTMLElement {
  #size: Size;

  #svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  #pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");

  set type(value: string) {
    this.#pathElement.setAttribute("d", this.paths[value]);
  }

  set text(value: string) {
    this.#svgElement.setAttribute("aria-label", value);
  }

  get size() {
    return this.#size;
  }
  set size(value: Size) {
    const sizeClassList = {
      small: "size__small",
      medium: "size__medium",
    };
    this.#svgElement.classList.remove(sizeClassList[this.#size]);
    this.#svgElement.classList.add(sizeClassList[value]);
    this.#size = value;
  }

  static get observedAttributes() {
    return ["type", "text", "size"];
  }

  paths: Object;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];
  }

  connectedCallback() {
    typeof this.size === "undefined" && (this.size = "medium");
    this.#svgElement.setAttribute("role", "img");
    this.#svgElement.setAttribute("viewBox", "0 0 24 24");
    this.#svgElement.classList.add("icon");
    this.#svgElement.appendChild(this.#pathElement);
    this.shadowRoot.appendChild(this.#svgElement);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    switch (name) {
      case "type":
        this.type = newValue;
        break;
      case "text":
        this.text = newValue;
        break;
      case "size":
        this.size = newValue as Size;
        break;
    }
  }
}

customElements.get("ub-icon") || customElements.define("ub-icon", UbIcon);

declare global {
  interface HTMLElementTagNameMap {
    "ub-icon": UbIcon;
  }
}
