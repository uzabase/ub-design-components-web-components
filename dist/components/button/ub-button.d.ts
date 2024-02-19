type ButtonType = "default" | "destructive";
type Appearance = "outline" | "fill" | "text";
type Size = "medium" | "large" | "xLarge" | "width160" | "width80";
export declare class UbButton extends HTMLElement {
    #private;
    buttonElement: HTMLButtonElement;
    textElement: HTMLSpanElement;
    set text(value: string);
    get loading(): boolean;
    set loading(value: boolean);
    get selected(): boolean;
    set selected(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    get type(): ButtonType;
    set type(value: ButtonType);
    get appearance(): Appearance;
    set appearance(value: Appearance);
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