/**
 * UbCheckboxは、デザインシステム2.0におけるチェックボックスコンポーネントです。
 * チェック状態、不確定状態、無効状態を制御でき、フォームと連携することができます。
 *
 * @element ub-checkbox
 * @summary チェックボックスコンポーネント
 *
 * @slot - チェックボックスに関連するラベルテキスト（デフォルトスロット）
 */
export declare class UbCheckbox extends HTMLElement {
    #private;
    /**
     * チェックボックスの値
     *
     * @attribute
     * @type {string}
     */
    get value(): string;
    set value(value: string);
    /**
     * チェックボックスの名前
     *
     * @attribute
     * @type {string}
     */
    set name(value: string);
    /**
     * チェックボックスがチェックされているかどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get checked(): boolean;
    set checked(value: boolean);
    /**
     * チェックボックスが不確定状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /**
     * チェックボックスが無効状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    set disabled(value: boolean);
    static get observedAttributes(): string[];
    protected internals: ElementInternals;
    static formAssociated: boolean;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    formResetCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-checkbox": UbCheckbox;
    }
}
//# sourceMappingURL=ub-checkbox.d.ts.map