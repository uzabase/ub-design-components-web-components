import { LitElement, html, render } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-radio-button-text")
export class UbRadioButtonText extends LitElement {
  #value = "on";
  #name: string | undefined = undefined;
  #checked = false;
  #disabled = false;
  #input = document.createElement("input");

  @property()
  set value(val: string) {
    this.#value = val || "on";
    this.#input.setAttribute("value", String(this.#value));
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
    this.#input.checked = val;
    if (val) this.#otherRadioButtonDeSelect();
    this.#dispatchOnChangeEvent();
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

  static formAssociated = true;

  constructor() {
    super();
    this.#input.classList.add("input");
    this.#input.addEventListener("change", () => {
      this.#handleOnChange();
    });
    this.#input.setAttribute("type", "radio");
    this.#input.setAttribute("slot", "radio");
  }

  connectedCallback() {
    super.connectedCallback();
    this.#renderToLightDOM();
  }

  formResetCallback() {
    this.deSelect();
  }

  #renderToLightDOM() {
    render(html`${this.#input}`, this);
  }

  #dispatchOnChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          checked: this.checked,
        },
      }),
    );
  }

  #otherRadioButtonDeSelect() {
    Array.prototype.slice
      .call((this.#input.form || document).getElementsByTagName(this.tagName))
      .filter((el: UbRadioButtonText) => {
        return el.getAttribute("name") === this.name && el !== this;
      })
      .map((el: UbRadioButtonText) => {
        el.deSelect!();
      });
  }

  #handleOnLabelClick() {
    this.checked === false && (this.checked = true);
  }

  #handleOnChange() {
    this.checked = this.#input.checked;
  }

  deSelect() {
    this.checked === true && (this.checked = false);
  }

  render() {
    return html`
      <span class="base" @click=${this.#handleOnLabelClick}>
        <span class="radio">
          <slot name="radio"></slot>
        </span>
        <span class="text">${this.text}</span>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-radio-button-text": UbRadioButtonText;
  }
}
