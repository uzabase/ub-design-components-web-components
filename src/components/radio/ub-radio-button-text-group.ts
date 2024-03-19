// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

type Direction = "horizontal" | "vertical";

type Data = {
  text: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
};

export class UbRadioButtonTextGroup extends HTMLElement {
  #name: string;
  #direction: string;
  #data: Data[] = [];
  #innerElement = document.createElement("ul");
  #inputElements: HTMLInputElement[] = [];

  get name() {
    return this.#name;
  }
  set name(value: string) {
    this.#inputElements.map((element) => element.setAttribute("name", value));
    this.setAttribute("name", value);
    this.#name = value;
  }

  set direction(value: Direction) {
    const _value: Direction = value === "vertical" ? "vertical" : "horizontal";
    this.#innerElement.classList.remove(this.#direction);
    this.#innerElement.classList.add(_value);
    this.#direction = _value;
  }

  get data() {
    return this.#data;
  }
  set data(value: Data[]) {
    this.#data = value;
    this.#renderRadioButtons();
  }

  static get observedAttributes() {
    return ["name", "direction", "json-data"];
  }

  protected internals: ElementInternals;
  static formAssociated = true;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];
    this.internals = this.attachInternals();
  }

  connectedCallback() {
    this.#innerElement.classList.add("base");
    this.#innerElement.setAttribute("role", "radiogroup");
    this.shadowRoot.appendChild(this.#innerElement);
    this.#renderRadioButtons();
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    switch (name) {
      case "name":
        this.name = newValue;
        break;
      case "direction":
        this.direction = newValue as Direction;
        break;
      case "json-data":
        if (newValue === null) {
          this.data = [];
        } else {
          this.data = JSON.parse(newValue);
        }
        break;
    }
  }

  formResetCallback() {
    this.#inputElements.map((element) => (element.checked = false));
    this.internals.setFormValue(null);
  }

  #renderRadioButtons() {
    this.#innerElement.innerHTML = "";
    this.#inputElements = [];
    this.data.map((data, index) => {
      const ListElement = document.createElement("li");
      const inputElement = document.createElement("input");
      const radioElement = document.createElement("span");
      const labelElement = document.createElement("label");
      const labelInnerElement = document.createElement("span");
      const value = data.value || "on";
      ListElement.classList.add("item");
      inputElement.setAttribute("type", "radio");
      inputElement.setAttribute("value", value);
      inputElement.setAttribute("name", this.name);
      inputElement.setAttribute("id", "radioButton" + index);
      inputElement.checked = data.checked;
      inputElement.disabled = data.disabled;
      if (data.checked) this.internals.setFormValue(value);
      inputElement.classList.add("input");
      inputElement.addEventListener("change", (e) => this.#handleOnChange(e));
      this.#inputElements.push(inputElement);
      radioElement.classList.add("radio");
      labelElement.classList.add("text");
      labelElement.setAttribute("for", "radioButton" + index);
      labelElement.setAttribute("aria-labeledby", "radioButtonLabel" + index);
      labelInnerElement.setAttribute("aria-hidden", "true");
      labelInnerElement.setAttribute("id", "radioButtonLabel" + index);
      labelInnerElement.classList.add("text-inner");
      labelInnerElement.innerText = data.text;
      radioElement.appendChild(inputElement);
      ListElement.appendChild(radioElement);
      labelElement.appendChild(labelInnerElement);
      ListElement.appendChild(labelElement);
      this.#innerElement.appendChild(ListElement);
    });
  }

  #handleOnChange(event: Event) {
    const value = (event.currentTarget as HTMLInputElement).value;
    this.internals.setFormValue(value);
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          value,
        },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-radio-button-text-group": UbRadioButtonTextGroup;
  }
}
