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
var _UbRadioButtonText_instances, _UbRadioButtonText_value, _UbRadioButtonText_name, _UbRadioButtonText_checked, _UbRadioButtonText_disabled, _UbRadioButtonText_input, _UbRadioButtonText_renderToLightDOM, _UbRadioButtonText_dispatchOnChangeEvent, _UbRadioButtonText_otherRadioButtonDeSelect, _UbRadioButtonText_handleOnLabelClick, _UbRadioButtonText_handleOnChange;
import { LitElement, html, render } from "lit";
import { customElement, property } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
let UbRadioButtonText = class UbRadioButtonText extends LitElement {
    set value(val) {
        __classPrivateFieldSet(this, _UbRadioButtonText_value, val || "on", "f");
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").setAttribute("value", String(__classPrivateFieldGet(this, _UbRadioButtonText_value, "f")));
    }
    get value() {
        return __classPrivateFieldGet(this, _UbRadioButtonText_value, "f");
    }
    set name(val) {
        __classPrivateFieldSet(this, _UbRadioButtonText_name, val || undefined, "f");
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").setAttribute("name", String(__classPrivateFieldGet(this, _UbRadioButtonText_name, "f")));
    }
    get name() {
        return __classPrivateFieldGet(this, _UbRadioButtonText_name, "f");
    }
    set checked(val) {
        __classPrivateFieldSet(this, _UbRadioButtonText_checked, val, "f");
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").checked = val;
        if (val)
            __classPrivateFieldGet(this, _UbRadioButtonText_instances, "m", _UbRadioButtonText_otherRadioButtonDeSelect).call(this);
        __classPrivateFieldGet(this, _UbRadioButtonText_instances, "m", _UbRadioButtonText_dispatchOnChangeEvent).call(this);
    }
    get checked() {
        return __classPrivateFieldGet(this, _UbRadioButtonText_checked, "f");
    }
    set disabled(val) {
        __classPrivateFieldSet(this, _UbRadioButtonText_disabled, val, "f");
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").disabled = __classPrivateFieldGet(this, _UbRadioButtonText_disabled, "f");
    }
    get disabled() {
        return __classPrivateFieldGet(this, _UbRadioButtonText_disabled, "f");
    }
    constructor() {
        super();
        _UbRadioButtonText_instances.add(this);
        _UbRadioButtonText_value.set(this, "on");
        _UbRadioButtonText_name.set(this, undefined);
        _UbRadioButtonText_checked.set(this, false);
        _UbRadioButtonText_disabled.set(this, false);
        _UbRadioButtonText_input.set(this, document.createElement("input"));
        this.text = "";
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").classList.add("input");
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").addEventListener("change", () => {
            __classPrivateFieldGet(this, _UbRadioButtonText_instances, "m", _UbRadioButtonText_handleOnChange).call(this);
        });
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").setAttribute("type", "radio");
        __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").setAttribute("slot", "radio");
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _UbRadioButtonText_instances, "m", _UbRadioButtonText_renderToLightDOM).call(this);
    }
    formResetCallback() {
        this.deSelect();
    }
    deSelect() {
        this.checked === true && (this.checked = false);
    }
    render() {
        return html `
      <span class="base" @click=${__classPrivateFieldGet(this, _UbRadioButtonText_instances, "m", _UbRadioButtonText_handleOnLabelClick)}>
        <span class="radio">
          <slot name="radio"></slot>
        </span>
        <span class="text">${this.text}</span>
      </span>
    `;
    }
};
_UbRadioButtonText_value = new WeakMap();
_UbRadioButtonText_name = new WeakMap();
_UbRadioButtonText_checked = new WeakMap();
_UbRadioButtonText_disabled = new WeakMap();
_UbRadioButtonText_input = new WeakMap();
_UbRadioButtonText_instances = new WeakSet();
_UbRadioButtonText_renderToLightDOM = function _UbRadioButtonText_renderToLightDOM() {
    render(html `${__classPrivateFieldGet(this, _UbRadioButtonText_input, "f")}`, this);
};
_UbRadioButtonText_dispatchOnChangeEvent = function _UbRadioButtonText_dispatchOnChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
            checked: this.checked,
        },
    }));
};
_UbRadioButtonText_otherRadioButtonDeSelect = function _UbRadioButtonText_otherRadioButtonDeSelect() {
    Array.prototype.slice
        .call((__classPrivateFieldGet(this, _UbRadioButtonText_input, "f").form || document).getElementsByTagName(this.tagName))
        .filter((el) => {
        return el.getAttribute("name") === this.name && el !== this;
    })
        .map((el) => {
        el.deSelect();
    });
};
_UbRadioButtonText_handleOnLabelClick = function _UbRadioButtonText_handleOnLabelClick() {
    this.checked === false && (this.checked = true);
};
_UbRadioButtonText_handleOnChange = function _UbRadioButtonText_handleOnChange() {
    this.checked = __classPrivateFieldGet(this, _UbRadioButtonText_input, "f").checked;
};
UbRadioButtonText.styles = [styles];
UbRadioButtonText.formAssociated = true;
__decorate([
    property()
], UbRadioButtonText.prototype, "value", null);
__decorate([
    property({ reflect: true })
], UbRadioButtonText.prototype, "name", null);
__decorate([
    property({ type: Boolean, reflect: true })
], UbRadioButtonText.prototype, "checked", null);
__decorate([
    property({ type: Boolean })
], UbRadioButtonText.prototype, "disabled", null);
__decorate([
    property()
], UbRadioButtonText.prototype, "text", void 0);
UbRadioButtonText = __decorate([
    customElement("ub-radio-button-text")
], UbRadioButtonText);
export { UbRadioButtonText };
