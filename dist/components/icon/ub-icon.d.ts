type Size = "small" | "medium";
export declare class UbIcon extends HTMLElement {
    #private;
    set type(value: string);
    set text(value: string);
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