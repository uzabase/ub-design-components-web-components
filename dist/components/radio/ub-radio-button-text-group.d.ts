type Direction = "horizontal" | "vertical";
type Data = {
    text: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
};
export declare class UbRadioButtonTextGroup extends HTMLElement {
    #private;
    get name(): string;
    set name(value: string);
    set direction(value: Direction);
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