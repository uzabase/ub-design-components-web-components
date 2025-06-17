type ButtonType = "default" | "destructive";
type Appearance = "outline" | "fill" | "text";
type Size = "medium" | "large" | "xLarge" | "width160" | "width80";
/**
 * UbButtonは、デザインシステム2.0におけるボタンコンポーネントです。
 * 様々なタイプ、外観、サイズを設定でき、ローディング状態や選択状態、無効状態を制御できます。
 *
 * @element ub-button
 * @summary ボタンコンポーネント
 *
 * @slot - ボタンのテキストコンテンツ（デフォルトスロット）
 */
export declare class UbButton extends HTMLElement {
    #private;
    buttonElement: HTMLButtonElement;
    textElement: HTMLSpanElement;
    /**
     * ボタンがローディング状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get loading(): boolean;
    set loading(value: boolean);
    /**
     * ボタンが選択状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get selected(): boolean;
    set selected(value: boolean);
    /**
     * ボタンが無効状態かどうか
     *
     * @attribute
     * @type {boolean}
     * @default false
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    /**
     * ボタンのタイプ（"default" または "destructive"）
     * - "default": 標準的なボタン
     * - "destructive": 削除などの破壊的な操作を表すボタン
     *
     * @attribute
     * @type {"default"|"destructive"}
     * @default "default"
     */
    get type(): ButtonType;
    set type(value: ButtonType);
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
    get appearance(): Appearance;
    set appearance(value: Appearance);
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
    get size(): Size;
    set size(value: Size);
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-button": UbButton;
    }
}
export {};
//# sourceMappingURL=ub-button.d.ts.map