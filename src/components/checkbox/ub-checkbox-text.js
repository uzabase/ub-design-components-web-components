var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
export let UbCheckboxText = class UbCheckboxText extends LitElement {
    set checked(val) {
        this._checked = val;
        this.internals.setFormValue(val ? this.value : null);
    }
    get checked() {
        return this._checked;
    }
    constructor() {
        super();
        this._checked = false;
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
