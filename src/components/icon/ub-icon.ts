import resetStyle from "@acab/reset.css?inline";

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

type Size = "small" | "medium";

const sizes: Size[] = ["small", "medium"];

function isValidSize(value: string): value is Size {
  return sizes.some((size) => size === value);
}

export class UbIcon extends HTMLElement {
  #size: Size = "medium";

  #svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  set type(value: string) {
    this.#svgElement.innerHTML = value in this.paths ? this.paths[value] : "";
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

  paths: Record<string, string> = {};

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.adoptedStyleSheets = [
      ...this.shadowRoot!.adoptedStyleSheets,
      styles,
    ];

    this.size = "medium";
  }

  connectedCallback() {
    this.#svgElement.setAttribute("role", "img");
    this.#svgElement.setAttribute("viewBox", "0 0 24 24");
    this.#svgElement.classList.add("icon");
    this.shadowRoot!.appendChild(this.#svgElement);
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
        if (isValidSize(newValue)) {
          this.size = newValue;
        } else {
          console.warn(`${newValue}は無効なsize属性です。`);
          this.size = "medium";
        }
        break;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-icon": UbIcon;
  }
}
