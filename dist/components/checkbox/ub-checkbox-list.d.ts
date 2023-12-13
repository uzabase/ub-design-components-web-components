import { LitElement } from "lit";
export declare class UbCheckboxList extends LitElement {
    private _checked;
    value: string;
    name: string | undefined;
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
    private handleOnChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-checkbox-list": UbCheckboxList;
    }
}
//# sourceMappingURL=ub-checkbox-list.d.ts.map