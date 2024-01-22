import { LitElement } from "lit";
export declare class UbIcon extends LitElement {
    type: string;
    text?: string;
    size?: "small" | "medium";
    viewBox: number;
    paths: Object;
    static styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ub-icon": UbIcon;
    }
}
//# sourceMappingURL=ub-icon.d.ts.map