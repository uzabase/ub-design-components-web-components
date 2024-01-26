import { LitElement } from "lit";
export declare class UbRadioButtonText extends LitElement {
    #private;
    value: string;
    name: string | undefined;
    set checked(val: boolean);
    get checked(): boolean;
    disabled: boolean;
    text: string;
    input: HTMLInputElement;
    static styles: CSSStyleSheet[];
    protected internals: ElementInternals;
    static formAssociated: boolean;
    constructor();
    private handleOnChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-radio-button-text": UbRadioButtonText;
    }
}
//# sourceMappingURL=ub-radio-button-text.d.ts.map