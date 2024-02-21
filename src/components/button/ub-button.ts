// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

type ButtonType = "default" | "destructive";
type Appearance = "outline" | "fill" | "text";
type Size = "medium" | "large" | "xLarge" | "width160" | "width80";

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

export class UbButton extends HTMLElement {
  #loading = false;
  #selected = false;
  #disabled = false;
  #type: ButtonType = "default";
  #appearance: Appearance = "outline";
  #size: Size = "medium";

  buttonElement = document.createElement("button");
  textElement = document.createElement("span");

  set text(value: string) {
    this.textElement.innerText = value;
  }

  get loading() {
    return this.#loading;
  }
  set loading(value: boolean) {
    const button = this.buttonElement;
    this.#loading = value;
    value
      ? button.classList.add("isLoading")
      : button.classList.remove("isLoading");
    this.#buttonDisabledUpdate();
  }

  get selected() {
    return this.#selected;
  }
  set selected(value: boolean) {
    const button = this.buttonElement;
    this.#selected = value;
    value
      ? button.classList.add("isSelected")
      : button.classList.remove("isSelected");
  }

  get disabled() {
    return this.#disabled;
  }
  set disabled(value: boolean) {
    const button = this.buttonElement;
    this.#disabled = value;
    value
      ? button.classList.add("isDisable")
      : button.classList.remove("isDisable");
    this.#buttonDisabledUpdate();
  }

  get type() {
    return this.#type;
  }
  set type(value: ButtonType) {
    const button = this.buttonElement;
    const typeClassList = {
      default: "type__default",
      destructive: "type__destructive",
    };
    button.classList.remove(typeClassList[this.#type]);
    button.classList.add(typeClassList[value]);
    this.#type = value;
  }

  get appearance() {
    return this.#appearance;
  }
  set appearance(value: Appearance) {
    const button = this.buttonElement;
    const typeClassList = {
      outline: "appearance__outline",
      fill: "appearance__fill",
      text: "appearance__text",
    };
    button.classList.remove(typeClassList[this.#appearance]);
    button.classList.add(typeClassList[value]);
    this.#appearance = value;
  }

  get size() {
    return this.#size;
  }
  set size(value: Size) {
    const button = this.buttonElement;
    const typeClassList = {
      medium: "size__medium",
      large: "size__large",
      xLarge: "size__xLarge",
      width160: "size__width160",
      width80: "size__width80",
    };
    button.classList.remove(typeClassList[this.#size]);
    button.classList.add(typeClassList[value]);
    this.#size = value;
  }

  static get observedAttributes() {
    return [
      "text",
      "loading",
      "selected",
      "disabled",
      "type",
      "appearance",
      "size",
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];
    this.buttonElement.classList.add("base");
    this.textElement.classList.add("base__text");
    this.buttonElement.appendChild(this.textElement);
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.buttonElement);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    switch (name) {
      case "text":
        this.text = newValue;
        break;
      case "loading":
        this.loading = newValue === "true" || newValue === "";
        break;
      case "selected":
        this.selected = newValue === "true" || newValue === "";
        break;
      case "disabled":
        this.disabled = newValue === "true" || newValue === "";
        break;
      case "type":
        this.type = newValue as ButtonType;
        break;
      case "appearance":
        this.appearance = newValue as Appearance;
        break;
      case "size":
        this.size = newValue as Size;
        break;
    }
  }

  #buttonDisabledUpdate() {
    this.buttonElement.disabled = this.disabled || this.loading;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-button": UbButton;
  }
}
