import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-radio-button-text")
export class UbRadioButtonText extends LitElement {
  #_checked = false;

  @property({ type: String })
  value = "on";

  @property({ type: String })
  name: string | undefined = undefined;

  @property({ type: Boolean, reflect: true })
  set checked(val: boolean) {
    this.#_checked = val;
    this.internals.setFormValue(val ? this.value : null);
  }
  get checked() {
    return this.#_checked;
  }

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  text = "";

  @query("input")
  input!: HTMLInputElement;

  static override styles = [styles];

  protected internals: ElementInternals;
  static formAssociated = true;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  private handleOnChange() {
    const { checked } = this.input;
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

  render() {
    return html`
      <label class="base">
        <span class="radio">
          <input
            type="radio"
            class="input"
            .value=${this.value}
            .name=${this.name}
            .checked=${this.checked}
            .disabled=${this.disabled}
            @change="${this.handleOnChange}"
          />
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
