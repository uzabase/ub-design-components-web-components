import { LitElement } from "lit";
export declare class UbCheckbox extends LitElement {
    #private;
    value: string;
    name: string | undefined;
    set checked(val: boolean);
    get checked(): boolean;
    indeterminate: boolean;
    disabled: boolean;
    input: HTMLInputElement;
    static styles: CSSStyleSheet[];
    protected internals: ElementInternals;
    static formAssociated: boolean;
    constructor();
    formResetCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-checkbox": UbCheckbox;
    }
}
//# sourceMappingURL=ub-checkbox.d.ts.map