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
var _UbRadioButtonTextGroup_instances, _UbRadioButtonTextGroup_name, _UbRadioButtonTextGroup_direction, _UbRadioButtonTextGroup_data, _UbRadioButtonTextGroup_innerElement, _UbRadioButtonTextGroup_inputElements, _UbRadioButtonTextGroup_renderRadioButtons, _UbRadioButtonTextGroup_handleOnChange;
import resetStyle from "@acab/reset.css?inline";
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
const directions = ["horizontal", "vertical"];
function isValidDirection(value) {
    return directions.some((direction) => direction === value);
}
export class UbRadioButtonTextGroup extends HTMLElement {
    get name() {
        return __classPrivateFieldGet(this, _UbRadioButtonTextGroup_name, "f");
    }
    set name(value) {
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_inputElements, "f").map((element) => element.setAttribute("name", value));
        this.setAttribute("name", value);
        __classPrivateFieldSet(this, _UbRadioButtonTextGroup_name, value, "f");
    }
    set direction(value) {
        const _value = value === "vertical" ? "vertical" : "horizontal";
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f").classList.remove(__classPrivateFieldGet(this, _UbRadioButtonTextGroup_direction, "f"));
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f").classList.add(_value);
        __classPrivateFieldSet(this, _UbRadioButtonTextGroup_direction, _value, "f");
    }
    get data() {
        return __classPrivateFieldGet(this, _UbRadioButtonTextGroup_data, "f");
    }
    set data(value) {
        __classPrivateFieldSet(this, _UbRadioButtonTextGroup_data, value, "f");
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_instances, "m", _UbRadioButtonTextGroup_renderRadioButtons).call(this);
    }
    static get observedAttributes() {
        return ["name", "direction", "json-data"];
    }
    constructor() {
        super();
        _UbRadioButtonTextGroup_instances.add(this);
        _UbRadioButtonTextGroup_name.set(this, "");
        _UbRadioButtonTextGroup_direction.set(this, "horizontal");
        _UbRadioButtonTextGroup_data.set(this, []);
        _UbRadioButtonTextGroup_innerElement.set(this, document.createElement("ul"));
        _UbRadioButtonTextGroup_inputElements.set(this, []);
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, styles];
        this.internals = this.attachInternals();
        this.direction = "horizontal";
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f").classList.add("base");
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f").setAttribute("role", "radiogroup");
        this.shadowRoot?.appendChild(__classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f"));
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_instances, "m", _UbRadioButtonTextGroup_renderRadioButtons).call(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        switch (name) {
            case "name":
                this.name = newValue;
                break;
            case "direction":
                if (isValidDirection(newValue)) {
                    this.direction = newValue;
                }
                else {
                    this.direction = "horizontal";
                }
                break;
            case "json-data":
                if (newValue === null) {
                    this.data = [];
                }
                else {
                    this.data = JSON.parse(newValue);
                }
                break;
        }
    }
    formResetCallback() {
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_inputElements, "f").map((element) => (element.checked = false));
        this.internals.setFormValue(null);
    }
}
_UbRadioButtonTextGroup_name = new WeakMap(), _UbRadioButtonTextGroup_direction = new WeakMap(), _UbRadioButtonTextGroup_data = new WeakMap(), _UbRadioButtonTextGroup_innerElement = new WeakMap(), _UbRadioButtonTextGroup_inputElements = new WeakMap(), _UbRadioButtonTextGroup_instances = new WeakSet(), _UbRadioButtonTextGroup_renderRadioButtons = function _UbRadioButtonTextGroup_renderRadioButtons() {
    __classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f").innerHTML = "";
    __classPrivateFieldSet(this, _UbRadioButtonTextGroup_inputElements, [], "f");
    this.data.map((data, index) => {
        const ListElement = document.createElement("li");
        const inputElement = document.createElement("input");
        const radioElement = document.createElement("span");
        const labelElement = document.createElement("label");
        const labelInnerElement = document.createElement("span");
        const value = data.value || "on";
        ListElement.classList.add("item");
        inputElement.setAttribute("type", "radio");
        inputElement.setAttribute("value", value);
        if (this.name !== "")
            inputElement.setAttribute("name", this.name);
        inputElement.setAttribute("id", "radioButton" + index);
        inputElement.checked = data.checked ?? false;
        inputElement.disabled = data.disabled ?? false;
        if (data.checked)
            this.internals.setFormValue(value);
        inputElement.classList.add("input");
        inputElement.addEventListener("change", (e) => __classPrivateFieldGet(this, _UbRadioButtonTextGroup_instances, "m", _UbRadioButtonTextGroup_handleOnChange).call(this, e));
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_inputElements, "f").push(inputElement);
        radioElement.classList.add("radio");
        labelElement.classList.add("text");
        labelElement.setAttribute("for", "radioButton" + index);
        labelElement.setAttribute("aria-labeledby", "radioButtonLabel" + index);
        labelInnerElement.setAttribute("aria-hidden", "true");
        labelInnerElement.setAttribute("id", "radioButtonLabel" + index);
        labelInnerElement.classList.add("text-inner");
        labelInnerElement.innerText = data.text;
        radioElement.appendChild(inputElement);
        ListElement.appendChild(radioElement);
        labelElement.appendChild(labelInnerElement);
        ListElement.appendChild(labelElement);
        __classPrivateFieldGet(this, _UbRadioButtonTextGroup_innerElement, "f").appendChild(ListElement);
    });
}, _UbRadioButtonTextGroup_handleOnChange = function _UbRadioButtonTextGroup_handleOnChange(event) {
    const value = event.currentTarget.value;
    this.internals.setFormValue(value);
    this.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
            value,
        },
    }));
};
UbRadioButtonTextGroup.formAssociated = true;
