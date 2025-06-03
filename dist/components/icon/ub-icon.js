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
var _UbIcon_size, _UbIcon_svgElement;
import resetStyle from "@sp-design/recet.css/src/reset.css?inline";
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
const sizes = ["small", "medium"];
function isValidSize(value) {
    return sizes.some((size) => size === value);
}
export class UbIcon extends HTMLElement {
    set type(value) {
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").innerHTML = value in this.paths ? this.paths[value] : "";
    }
    set text(value) {
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").setAttribute("aria-label", value);
    }
    get size() {
        return __classPrivateFieldGet(this, _UbIcon_size, "f");
    }
    set size(value) {
        const sizeClassList = {
            small: "size__small",
            medium: "size__medium",
        };
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").classList.remove(sizeClassList[__classPrivateFieldGet(this, _UbIcon_size, "f")]);
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").classList.add(sizeClassList[value]);
        __classPrivateFieldSet(this, _UbIcon_size, value, "f");
    }
    static get observedAttributes() {
        return ["type", "text", "size"];
    }
    constructor() {
        super();
        _UbIcon_size.set(this, "medium");
        _UbIcon_svgElement.set(this, document.createElementNS("http://www.w3.org/2000/svg", "svg"));
        this.paths = {};
        this.attachShadow({ mode: "open" });
        this.shadowRoot.adoptedStyleSheets = [
            ...this.shadowRoot.adoptedStyleSheets,
            styles,
        ];
        this.size = "medium";
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").setAttribute("role", "img");
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").setAttribute("viewBox", "0 0 24 24");
        __classPrivateFieldGet(this, _UbIcon_svgElement, "f").classList.add("icon");
        this.shadowRoot.appendChild(__classPrivateFieldGet(this, _UbIcon_svgElement, "f"));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        switch (name) {
            case "type":
                this.type = newValue;
                break;
            case "text":
                this.text = newValue;
                break;
            case "size":
                if (isValidSize(newValue)) {
                    this.size = newValue;
                }
                else {
                    console.warn(`${newValue}は無効なsize属性です。`);
                    this.size = "medium";
                }
                break;
        }
    }
}
_UbIcon_size = new WeakMap(), _UbIcon_svgElement = new WeakMap();
