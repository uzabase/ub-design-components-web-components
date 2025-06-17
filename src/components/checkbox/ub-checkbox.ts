/**
 * UbCheckboxは、デザインシステム2.0におけるチェックボックスコンポーネントです。
 * チェック状態、不確定状態、無効状態を制御でき、フォームと連携することができます。
 *
 * @element ub-checkbox
 * @summary チェックボックスコンポーネント
 *
 * @slot - チェックボックスに関連するラベルテキスト（デフォルトスロット）
 */
export class UbCheckbox extends HTMLElement {
  #inputElement = document.createElement("input");

  /**
   * チェックボックスの値
   *
   * @attribute
   * @type {string}
   */
  get value() {
    return this.#inputElement.value;
  }
  set value(value: string) {
    this.#inputElement.value = value;
  }

  /**
   * チェックボックスの名前
   *
   * @attribute
   * @type {string}
   */
  set name(value: string) {
    this.setAttribute("name", value);
    this.#inputElement.name = value;
  }

  /**
   * チェックボックスがチェックされているかどうか
   *
   * @attribute
   * @type {boolean}
   * @default false
   */
  get checked() {
    return this.#inputElement.checked;
  }
  set checked(value: boolean) {
    if (value) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }

    this.#inputElement.checked = value;
    this.internals.setFormValue(value ? this.value : null);
  }

  /**
   * チェックボックスが不確定状態かどうか
   *
   * @attribute
   * @type {boolean}
   * @default false
   */
  get indeterminate() {
    return this.#inputElement.indeterminate;
  }
  set indeterminate(value: boolean) {
    this.#inputElement.indeterminate = value;
  }

  /**
   * チェックボックスが無効状態かどうか
   *
   * @attribute
   * @type {boolean}
   * @default false
   */
  set disabled(value: boolean) {
    this.#inputElement.disabled = value;
  }

  static get observedAttributes() {
    return ["value", "name", "checked", "indeterminate", "disabled"];
  }

  protected internals: ElementInternals;
  static formAssociated = true;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.internals = this.attachInternals();
  }

  connectedCallback() {
    const labelElement = document.createElement("label");
    const checkMarkElement = document.createElement("span");
    labelElement.classList.add("base");
    checkMarkElement.classList.add("checkmark");
    this.#inputElement.setAttribute("type", "checkbox");
    this.#inputElement.classList.add("input");
    this.#inputElement.addEventListener("change", () => this.#handleOnChange());
    checkMarkElement.appendChild(this.#inputElement);
    labelElement.appendChild(checkMarkElement);
    this.shadowRoot!.appendChild(labelElement);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    switch (name) {
      case "value":
        this.value = newValue;
        break;
      case "name":
        this.name = newValue;
        break;
      case "checked":
        this.checked = newValue === "true" || newValue === "";
        break;
      case "indeterminate":
        this.indeterminate = newValue === "true" || newValue === "";
        break;
      case "disabled":
        this.disabled = newValue === "true" || newValue === "";
        break;
    }
  }

  formResetCallback() {
    this.checked = false;
  }

  #handleOnChange() {
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          checked: this.checked,
          indeterminate: this.indeterminate,
        },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-checkbox": UbCheckbox;
  }
}
