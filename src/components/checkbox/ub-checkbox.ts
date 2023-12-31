import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };

const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);

@customElement("ub-checkbox")
export class UbCheckbox extends LitElement {
  private _checked = false;

  @property({ type: String })
  value = "on";

  @property({ type: String })
  name: string | undefined = undefined;

  @property({ type: Boolean })
  set checked(val: boolean) {
    this._checked = val;
    this.internals.setFormValue(val ? this.value : null);
  }
  get checked() {
    return this._checked;
  }

  @property({ type: Boolean })
  indeterminate = false;

  @property({ type: Boolean })
  disabled = false;

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
    const { checked, indeterminate } = this.input;
    this.checked = checked;
    this.indeterminate = indeterminate;
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          checked,
          indeterminate,
        },
      }),
    );
  }

  render() {
    return html`
      <label class="base">
        <span class="checkmark">
          <input
            type="checkbox"
            class="input"
            .value=${this.value}
            .name=${this.name}
            .checked=${this.checked}
            .indeterminate=${this.indeterminate}
            .disabled=${this.disabled}
            @change="${this.handleOnChange}"
          />
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-checkbox": UbCheckbox;
  }
}
