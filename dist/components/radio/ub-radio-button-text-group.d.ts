type Direction = "horizontal" | "vertical";
type Data = {
    text: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
};
/**
 * UbRadioButtonTextGroupは、デザインシステム2.0におけるラジオボタングループコンポーネントです。
 * テキスト付きラジオボタンを水平または垂直方向に配置し、フォームと連携することができます。
 *
 * フォーム内で使用する場合、name属性を設定することでフォーム送信時に選択されたラジオボタンの値が送信されます。
 * フォームのリセット時には、ラジオボタンの選択状態もリセットされます。
 *
 * @element ub-radio-button-text-group
 * @summary テキスト付きラジオボタングループコンポーネント
 */
export declare class UbRadioButtonTextGroup extends HTMLElement {
    #private;
    /**
     * ラジオボタングループの名前
     *
     * @attribute
     * @type {string}
     * @default ""
     */
    get name(): string;
    set name(value: string);
    /**
     * ラジオボタングループの配置方向（"horizontal"または"vertical"）
     * - "horizontal": 水平方向に配置
     * - "vertical": 垂直方向に配置
     *
     * @attribute
     * @type {"horizontal"|"vertical"}
     * @default "horizontal"
     */
    set direction(value: Direction);
    /**
     * ラジオボタンのデータ配列
     * 各データは次のプロパティを持つことができます：
     * - text: ラジオボタンのラベルテキスト（必須）
     * - value: ラジオボタンの値（省略時は "on" が設定されます）
     * - checked: ラジオボタンの初期チェック状態（省略時は false）
     * - disabled: ラジオボタンの無効状態（省略時は false）
     *
     * @attribute json-data
     * @type {Data[]}
     * @default []
     */
    get data(): Data[];
    set data(value: Data[]);
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
        "ub-radio-button-text-group": UbRadioButtonTextGroup;
    }
}
export {};
//# sourceMappingURL=ub-radio-button-text-group.d.ts.map