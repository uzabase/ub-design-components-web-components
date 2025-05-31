type Size = "small" | "medium";
/**
 * UbIconは、デザインシステム2.0におけるアイコンコンポーネントです。
 * 異なるタイプとサイズのアイコンを表示することができます。
 *
 * @element ub-icon
 * @summary アイコンコンポーネント
 */
export declare class UbIcon extends HTMLElement {
    #private;
    /**
     * アイコンのタイプ
     * 指定されたタイプに対応するSVGパスが表示されます
     *
     * @attribute
     * @type {string}
     */
    set type(value: string);
    /**
     * アイコンのアクセシビリティテキスト
     * スクリーンリーダーなどの支援技術で読み上げられるテキストを設定します
     *
     * @attribute
     * @type {string}
     */
    set text(value: string);
    /**
     * アイコンのサイズ（"small"または"medium"）
     * - "small": 小サイズ
     * - "medium": 中サイズ
     *
     * @attribute
     * @type {"small"|"medium"}
     * @default "medium"
     */
    get size(): Size;
    set size(value: Size);
    static get observedAttributes(): string[];
    paths: Record<string, string>;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-icon": UbIcon;
    }
}
export {};
//# sourceMappingURL=ub-icon.d.ts.map