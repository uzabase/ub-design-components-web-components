var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UbCheckboxText__checked;
import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
let UbCheckboxText = class UbCheckboxText extends LitElement {
    set checked(val) {
        __classPrivateFieldSet(this, _UbCheckboxText__checked, val, "f");
        this.internals.setFormValue(val ? this.value : null);
    }
    get checked() {
        return __classPrivateFieldGet(this, _UbCheckboxText__checked, "f");
    }
    constructor() {
        super();
        _UbCheckboxText__checked.set(this, false);
        this.value = "on";
        this.name = "";
        this.indeterminate = false;
        this.disabled = false;
        this.text = undefined;
        this.internals = this.attachInternals();
    }
    handleOnChange() {
        const { checked, indeterminate } = this.input;
        this.checked = checked;
        this.indeterminate = indeterminate;
        this.dispatchEvent(new CustomEvent("change", {
            bubbles: true,
            composed: true,
            detail: {
                checked,
                indeterminate,
            },
        }));
    }
    render() {
        return html `
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
        <span class="text">${this.text}</span>
      </label>
    `;
    }
};
_UbCheckboxText__checked = new WeakMap();
UbCheckboxText.styles = [styles];
UbCheckboxText.formAssociated = true;
__decorate([
    property({ type: String })
], UbCheckboxText.prototype, "value", void 0);
__decorate([
    property({ type: String })
], UbCheckboxText.prototype, "name", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], UbCheckboxText.prototype, "checked", null);
__decorate([
    property({ type: Boolean })
], UbCheckboxText.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Boolean })
], UbCheckboxText.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], UbCheckboxText.prototype, "text", void 0);
__decorate([
    query("input")
], UbCheckboxText.prototype, "input", void 0);
UbCheckboxText = __decorate([
    customElement("ub-checkbox-text")
], UbCheckboxText);
export { UbCheckboxText };
