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
const buttonTypes = ["default", "destructive"];
const appearances = ["outline", "fill", "text"];
const sizes = ["medium", "large", "xLarge", "width160", "width80"];
function isValidType(value) {
    return buttonTypes.some((type) => type === value);
}
function isValidAppearance(value) {
    return appearances.some((appearance) => appearance === value);
}
function isValidSize(value) {
    return sizes.some((size) => size === value);
}
/**
 * UbButtonは、デザインシステム2.0におけるボタンコンポーネントです。
 * 様々なタイプ、外観、サイズを設定でき、ローディング状態や選択状態、無効状態を制御できます。
 *
 * @element ub-button
 * @summary ボタンコンポーネント
 *
 * @slot - ボタンのテキストコンテンツ（デフォルトスロット）
 */
export class UbButton extends HTMLElement {
    /**
     * ボタンがローディング状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get loading() {
        return __classPrivateFieldGet(this, _UbButton_loading, "f");
    }
    set loading(value) {
        const button = this.buttonElement;
        __classPrivateFieldSet(this, _UbButton_loading, value, "f");
        if (value) {
            button.classList.add("isLoading");
        }
        else {
            button.classList.remove("isLoading");
        }
        __classPrivateFieldGet(this, _UbButton_instances, "m", _UbButton_buttonDisabledUpdate).call(this);
    }
    /**
     * ボタンが選択状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get selected() {
        return __classPrivateFieldGet(this, _UbButton_selected, "f");
    }
    set selected(value) {
        const button = this.buttonElement;
        __classPrivateFieldSet(this, _UbButton_selected, value, "f");
        if (value) {
            button.classList.add("isSelected");
        }
        else {
            button.classList.remove("isSelected");
        }
    }
    /**
     * ボタンが無効状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get disabled() {
        return __classPrivateFieldGet(this, _UbButton_disabled, "f");
    }
    set disabled(value) {
        const button = this.buttonElement;
        __classPrivateFieldSet(this, _UbButton_disabled, value, "f");
        if (value) {
            button.classList.add("isDisable");
        }
        else {
            button.classList.remove("isDisable");
        }
        __classPrivateFieldGet(this, _UbButton_instances, "m", _UbButton_buttonDisabledUpdate).call(this);
    }
    /**
     * ボタンのタイプ（"default" または "destructive"）
     * - "default": 標準的なボタン
     * - "destructive": 削除などの破壊的な操作を表すボタン
     *
     * @attribute
     * @type {"default"|"destructive"}
     * @default "default"
     */
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
    /**
     * ボタンの外観（"outline"、"fill"、または "text"）
     * - "outline": 枠線のみのボタン
     * - "fill": 塗りつぶされたボタン
     * - "text": テキストのみのボタン
     *
     * @attribute
     * @type {"outline"|"fill"|"text"}
     * @default "outline"
     */
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
    /**
     * ボタンのサイズ（"medium"、"large"、"xLarge"、"width160"、または "width80"）
     * - "medium": 中サイズ
     * - "large": 大サイズ
     * - "xLarge": 特大サイズ
     * - "width160": 幅160pxのボタン
     * - "width80": 幅80pxのボタン
     *
     * @attribute
     * @type {"medium"|"large"|"xLarge"|"width160"|"width80"}
     * @default "medium"
     */
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
        return ["loading", "selected", "disabled", "type", "appearance", "size"];
    }
    constructor() {
        super();
        _UbButton_instances.add(this);
        _UbButton_loading.set(this, false);
        _UbButton_selected.set(this, false);
        _UbButton_disabled.set(this, false);
        _UbButton_type.set(this, "default");
        _UbButton_appearance.set(this, "outline");
        _UbButton_size.set(this, "medium");
        this.buttonElement = document.createElement("button");
        this.textElement = document.createElement("span");
        this.attachShadow({ mode: "open" });
        this.buttonElement.classList.add("base");
        this.textElement.classList.add("base__text");
        this.loading = false;
        this.selected = false;
        this.disabled = false;
        this.type = "default";
        this.appearance = "outline";
        this.size = "medium";
    }
    connectedCallback() {
        const slotElement = document.createElement("slot");
        this.textElement.appendChild(slotElement);
        this.buttonElement.appendChild(this.textElement);
        this.shadowRoot.appendChild(this.buttonElement);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        switch (name) {
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
                if (isValidType(newValue)) {
                    this.type = newValue;
                }
                else {
                    console.warn(`${newValue}は無効なtype属性です。`);
                    this.type = "default";
                }
                break;
            case "appearance":
                if (isValidAppearance(newValue)) {
                    this.appearance = newValue;
                }
                else {
                    console.warn(`${newValue}は無効なappearance属性です。`);
                    this.appearance = "outline";
                }
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
_UbButton_loading = new WeakMap(), _UbButton_selected = new WeakMap(), _UbButton_disabled = new WeakMap(), _UbButton_type = new WeakMap(), _UbButton_appearance = new WeakMap(), _UbButton_size = new WeakMap(), _UbButton_instances = new WeakSet(), _UbButton_buttonDisabledUpdate = function _UbButton_buttonDisabledUpdate() {
    this.buttonElement.disabled = this.disabled || this.loading;
};
