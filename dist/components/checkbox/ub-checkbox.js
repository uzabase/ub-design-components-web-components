var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UbCheckbox_instances, _UbCheckbox_inputElement, _UbCheckbox_handleOnChange;
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
    /**
     * チェックボックスの値
     *
     * @attribute
     * @type {string}
     */
    get value() {
        return __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").value;
    }
    set value(value) {
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").value = value;
    }
    /**
     * チェックボックスの名前
     *
     * @attribute
     * @type {string}
     */
    set name(value) {
        this.setAttribute("name", value);
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").name = value;
    }
    /**
     * チェックボックスがチェックされているかどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get checked() {
        return __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").checked;
    }
    set checked(value) {
        if (value) {
            this.setAttribute("checked", "");
        }
        else {
            this.removeAttribute("checked");
        }
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").checked = value;
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
        return __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").indeterminate;
    }
    set indeterminate(value) {
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").indeterminate = value;
    }
    /**
     * チェックボックスが無効状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    set disabled(value) {
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").disabled = value;
    }
    static get observedAttributes() {
        return ["value", "name", "checked", "indeterminate", "disabled"];
    }
    constructor() {
        super();
        _UbCheckbox_instances.add(this);
        _UbCheckbox_inputElement.set(this, document.createElement("input"));
        this.attachShadow({ mode: "open" });
        this.internals = this.attachInternals();
    }
    connectedCallback() {
        const labelElement = document.createElement("label");
        const checkMarkElement = document.createElement("span");
        labelElement.classList.add("base");
        checkMarkElement.classList.add("checkmark");
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").setAttribute("type", "checkbox");
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").classList.add("input");
        __classPrivateFieldGet(this, _UbCheckbox_inputElement, "f").addEventListener("change", () => __classPrivateFieldGet(this, _UbCheckbox_instances, "m", _UbCheckbox_handleOnChange).call(this));
        checkMarkElement.appendChild(__classPrivateFieldGet(this, _UbCheckbox_inputElement, "f"));
        labelElement.appendChild(checkMarkElement);
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
_UbCheckbox_inputElement = new WeakMap(), _UbCheckbox_instances = new WeakSet(), _UbCheckbox_handleOnChange = function _UbCheckbox_handleOnChange() {
    this.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
            checked: this.checked,
            indeterminate: this.indeterminate,
        },
    }));
};
UbCheckbox.formAssociated = true;
