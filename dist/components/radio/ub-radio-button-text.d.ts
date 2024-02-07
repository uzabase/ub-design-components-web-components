import { LitElement } from "lit";
export declare class UbRadioButtonText extends LitElement {
    #private;
    set value(val: string);
    get value(): string;
    set name(val: string);
    get name(): string;
    set checked(val: boolean);
    get checked(): boolean;
    set disabled(val: boolean);
    get disabled(): boolean;
    text: string;
    static styles: CSSStyleSheet[];
    static formAssociated: boolean;
    constructor();
    connectedCallback(): void;
    formResetCallback(): void;
    deSelect(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-radio-button-text": UbRadioButtonText;
    }
}
//# sourceMappingURL=ub-radio-button-text.d.ts.map