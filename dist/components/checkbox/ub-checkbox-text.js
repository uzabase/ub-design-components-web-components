var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UbCheckboxText_instances, _UbCheckboxText_inputElement, _UbCheckboxText_handleOnChange;
/**
 * UbCheckboxTextは、デザインシステム2.0におけるテキスト付きチェックボックスコンポーネントです。
 * チェック状態、不確定状態、無効状態を制御でき、テキストラベルを表示し、フォームと連携することができます。
 *
 * @element ub-checkbox-text
 * @summary テキスト付きチェックボックスコンポーネント
 *
 * @slot - チェックボックスに関連するラベルテキスト（デフォルトスロット）
 */
export class UbCheckboxText extends HTMLElement {
    /**
     * チェックボックスの値
     *
     * @attribute
     * @type {string}
     */
    get value() {
        return __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").value;
    }
    set value(value) {
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").value = value;
    }
    /**
     * チェックボックスの名前
     *
     * @attribute
     * @type {string}
     */
    set name(value) {
        this.setAttribute("name", value);
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").name = value;
    }
    /**
     * チェックボックスがチェックされているかどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get checked() {
        return __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").checked;
    }
    set checked(value) {
        if (value) {
            this.setAttribute("checked", "");
        }
        else {
            this.removeAttribute("checked");
        }
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").checked = value;
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
        return __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").indeterminate;
    }
    set indeterminate(value) {
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").indeterminate = value;
    }
    /**
     * チェックボックスが無効状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    set disabled(value) {
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").disabled = value;
    }
    static get observedAttributes() {
        return ["value", "name", "checked", "indeterminate", "disabled"];
    }
    constructor() {
        super();
        _UbCheckboxText_instances.add(this);
        _UbCheckboxText_inputElement.set(this, document.createElement("input"));
        this.attachShadow({ mode: "open" });
        this.internals = this.attachInternals();
    }
    connectedCallback() {
        const labelElement = document.createElement("label");
        const checkMarkElement = document.createElement("span");
        labelElement.classList.add("base");
        checkMarkElement.classList.add("checkmark");
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").setAttribute("type", "checkbox");
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").classList.add("input");
        __classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f").addEventListener("change", () => __classPrivateFieldGet(this, _UbCheckboxText_instances, "m", _UbCheckboxText_handleOnChange).call(this));
        const slotContainerElement = document.createElement("div");
        slotContainerElement.classList.add("text");
        const slotElement = document.createElement("slot");
        slotContainerElement.appendChild(slotElement);
        checkMarkElement.appendChild(__classPrivateFieldGet(this, _UbCheckboxText_inputElement, "f"));
        labelElement.appendChild(checkMarkElement);
        labelElement.appendChild(slotContainerElement);
        this.shadowRoot.appendChild(labelElement);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
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
}
_UbCheckboxText_inputElement = new WeakMap(), _UbCheckboxText_instances = new WeakSet(), _UbCheckboxText_handleOnChange = function _UbCheckboxText_handleOnChange() {
    this.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
            checked: this.checked,
            indeterminate: this.indeterminate,
        },
    }));
};
UbCheckboxText.formAssociated = true;
