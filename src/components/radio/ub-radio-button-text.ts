import { LitElement, html, render } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-radio-button-text")
export class UbRadioButtonText extends LitElement {
  #that = this;
  #value = "on";
  #name: string | undefined = undefined;
  #checked = false;
  #disabled = false;
  #input = document.createElement("input");

  @property()
  set value(val: string) {
    this.#value = val || "on";
    this.#input.setAttribute("value", String(this.#value));
    // this.setAttribute("data-value", String(val));
  }
  get value() {
    return this.#value;
  }

  @property({ reflect: true })
  set name(val: string) {
    this.#name = val || undefined;
    this.#input.setAttribute("name", String(this.#name));
  }
  get name() {
    return this.#name;
  }

  @property({ type: Boolean, reflect: true })
  set checked(val: boolean) {
    this.#checked = val;
    // this.internals.setFormValue(val ? this.value : null);
    this.#input.checked = this.#checked;
  }
  get checked() {
    return this.#checked;
  }

  @property({ type: Boolean })
  set disabled(val: boolean) {
    this.#disabled = val;
    this.#input.disabled = this.#disabled;
  }
  get disabled() {
    return this.#disabled;
  }

  @property()
  text = "";

  static override styles = [styles];

  // protected internals: ElementInternals;
  // static formAssociated = true;

  constructor() {
    console.log("fire constructor");
    super();
    // this.internals = this.attachInternals();
    this.#input.classList.add("input");
    this.#input.addEventListener("change", () => {
      this.#handleOnChange();
    });
    this.#input.setAttribute("type", "radio");
    // this.#input.setAttribute("style", "opacity: 0");
  }

  connectedCallback() {
    super.connectedCallback();
    this.#renderToLightDOM();
  }

  #renderToLightDOM() {
    render(html`${this.#input}`, this);
  }

  #handleOnClick() {
    if (this.checked === true) return;
    this.checked = true;
    this.#input.dispatchEvent(
      new Event("change", {
        bubbles: false,
        composed: false,
      }),
    );
  }

  #handleOnChange() {
    const { checked } = this.#input;
    this.checked = checked;
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          checked,
        },
      }),
    );
  }

  #handleOnDeSelect() {
    // TODO?
  }

  render() {
    return html`
      <label class="base" @click=${this.#handleOnClick}>
        <span class="radio">
          <slot></slot>
        </span>
        <span class="text">${this.text}</span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-radio-button-text": UbRadioButtonText;
  }
}
