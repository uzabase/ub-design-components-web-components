var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UbButton_instances, _UbButton_loading, _UbButton_selected, _UbButton_disabled, _UbButton_type, _UbButton_appearance, _UbButton_size, _UbButton_buttonDisabledUpdate;
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
export class UbButton extends HTMLElement {
    set text(value) {
        this.textElement.innerText = value;
    }
    get loading() {
        return __classPrivateFieldGet(this, _UbButton_loading, "f");
    }
    set loading(value) {
        const button = this.buttonElement;
        __classPrivateFieldSet(this, _UbButton_loading, value, "f");
        value
            ? button.classList.add("isLoading")
            : button.classList.remove("isLoading");
        __classPrivateFieldGet(this, _UbButton_instances, "m", _UbButton_buttonDisabledUpdate).call(this);
    }
    get selected() {
        return __classPrivateFieldGet(this, _UbButton_selected, "f");
    }
    set selected(value) {
        const button = this.buttonElement;
        __classPrivateFieldSet(this, _UbButton_selected, value, "f");
        value
            ? button.classList.add("isSelected")
            : button.classList.remove("isSelected");
    }
    get disabled() {
        return __classPrivateFieldGet(this, _UbButton_disabled, "f");
    }
    set disabled(value) {
        const button = this.buttonElement;
        __classPrivateFieldSet(this, _UbButton_disabled, value, "f");
        value
            ? button.classList.add("isDisable")
            : button.classList.remove("isDisable");
        __classPrivateFieldGet(this, _UbButton_instances, "m", _UbButton_buttonDisabledUpdate).call(this);
    }
    get type() {
        return __classPrivateFieldGet(this, _UbButton_type, "f");
    }
    set type(value) {
        const button = this.buttonElement;
        const typeClassList = {
            default: "type__default",
            destructive: "type__destructive",
        };
        button.classList.remove(typeClassList[__classPrivateFieldGet(this, _UbButton_type, "f")]);
        button.classList.add(typeClassList[value]);
        __classPrivateFieldSet(this, _UbButton_type, value, "f");
    }
    get appearance() {
        return __classPrivateFieldGet(this, _UbButton_appearance, "f");
    }
    set appearance(value) {
        const button = this.buttonElement;
        const typeClassList = {
            outline: "appearance__outline",
            fill: "appearance__fill",
            text: "appearance__text",
        };
        button.classList.remove(typeClassList[__classPrivateFieldGet(this, _UbButton_appearance, "f")]);
        button.classList.add(typeClassList[value]);
        __classPrivateFieldSet(this, _UbButton_appearance, value, "f");
    }
    get size() {
        return __classPrivateFieldGet(this, _UbButton_size, "f");
    }
    set size(value) {
        const button = this.buttonElement;
        const typeClassList = {
            medium: "size__medium",
            large: "size__large",
            xLarge: "size__xLarge",
            width160: "size__width160",
            width80: "size__width80",
        };
        button.classList.remove(typeClassList[__classPrivateFieldGet(this, _UbButton_size, "f")]);
        button.classList.add(typeClassList[value]);
        __classPrivateFieldSet(this, _UbButton_size, value, "f");
    }
    static get observedAttributes() {
        return [
            "text",
            "loading",
            "selected",
            "disabled",
            "type",
            "appearance",
            "size",
        ];
    }
    constructor() {
        super();
        _UbButton_instances.add(this);
        _UbButton_loading.set(this, void 0);
        _UbButton_selected.set(this, void 0);
        _UbButton_disabled.set(this, void 0);
        _UbButton_type.set(this, void 0);
        _UbButton_appearance.set(this, void 0);
        _UbButton_size.set(this, void 0);
        this.buttonElement = document.createElement("button");
        this.textElement = document.createElement("span");
        this.attachShadow({ mode: "open" });
        this.shadowRoot.adoptedStyleSheets = [
            ...this.shadowRoot.adoptedStyleSheets,
            styles,
        ];
        this.buttonElement.classList.add("base");
        this.textElement.classList.add("base__text");
        this.buttonElement.appendChild(this.textElement);
    }
    connectedCallback() {
        if (typeof this.loading === "undefined")
            this.loading = false;
        if (typeof this.selected === "undefined")
            this.selected = false;
        if (typeof this.disabled === "undefined")
            this.disabled = false;
        if (typeof this.type === "undefined")
            this.type = "default";
        if (typeof this.appearance === "undefined")
            this.appearance = "outline";
        if (typeof this.size === "undefined")
            this.size = "medium";
        this.shadowRoot.appendChild(this.buttonElement);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        switch (name) {
            case "text":
                this.text = newValue;
                break;
            case "loading":
                this.loading = newValue === "true" || newValue === "";
                break;
            case "selected":
                this.selected = newValue === "true" || newValue === "";
                break;
            case "disabled":
                this.disabled = newValue === "true" || newValue === "";
                break;
            case "type":
                this.type = newValue;
                break;
            case "appearance":
                this.appearance = newValue;
                break;
            case "size":
                this.size = newValue;
                break;
        }
    }
}
_UbButton_loading = new WeakMap(), _UbButton_selected = new WeakMap(), _UbButton_disabled = new WeakMap(), _UbButton_type = new WeakMap(), _UbButton_appearance = new WeakMap(), _UbButton_size = new WeakMap(), _UbButton_instances = new WeakSet(), _UbButton_buttonDisabledUpdate = function _UbButton_buttonDisabledUpdate() {
    this.buttonElement.disabled = this.disabled || this.loading;
};
