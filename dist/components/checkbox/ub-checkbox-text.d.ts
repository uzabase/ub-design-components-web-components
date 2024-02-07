import { LitElement } from "lit";
export declare class UbCheckboxText extends LitElement {
    #private;
    value: string;
    name: string;
    set checked(val: boolean);
    get checked(): boolean;
    indeterminate: boolean;
    disabled: boolean;
    text: string | undefined;
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
        "ub-checkbox-text": UbCheckboxText;
    }
}
//# sourceMappingURL=ub-checkbox-text.d.ts.map