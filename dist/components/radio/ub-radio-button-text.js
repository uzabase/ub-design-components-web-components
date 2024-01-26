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
var _UbRadioButtonText__checked;
import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
let UbRadioButtonText = class UbRadioButtonText extends LitElement {
    set checked(val) {
        __classPrivateFieldSet(this, _UbRadioButtonText__checked, val, "f");
        this.internals.setFormValue(val ? this.value : null);
    }
    get checked() {
        return __classPrivateFieldGet(this, _UbRadioButtonText__checked, "f");
    }
    constructor() {
        super();
        _UbRadioButtonText__checked.set(this, false);
        this.value = "on";
        this.name = undefined;
        this.disabled = false;
        this.text = "";
        this.internals = this.attachInternals();
    }
    handleOnChange() {
        const { checked } = this.input;
        this.checked = checked;
        this.dispatchEvent(new CustomEvent("change", {
            bubbles: true,
            composed: true,
            detail: {
                checked,
            },
        }));
    }
    render() {
        return html `
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
};
_UbRadioButtonText__checked = new WeakMap();
UbRadioButtonText.styles = [styles];
UbRadioButtonText.formAssociated = true;
__decorate([
    property({ type: String })
], UbRadioButtonText.prototype, "value", void 0);
__decorate([
    property({ type: String })
], UbRadioButtonText.prototype, "name", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], UbRadioButtonText.prototype, "checked", null);
__decorate([
    property({ type: Boolean })
], UbRadioButtonText.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], UbRadioButtonText.prototype, "text", void 0);
__decorate([
    query("input")
], UbRadioButtonText.prototype, "input", void 0);
UbRadioButtonText = __decorate([
    customElement("ub-radio-button-text")
], UbRadioButtonText);
export { UbRadioButtonText };
