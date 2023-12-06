import { LitElement } from "lit";
export declare class UbButton extends LitElement {
  label: string;
  loading?: boolean;
  selected?: boolean;
  disabled?: boolean;
  type?: "default" | "destructive";
  appearance?: "outline" | "fill" | "text";
  size?: "medium" | "large" | "xLarge" | "width160" | "width80";
  static styles: CSSStyleSheet[];
  render(): import("lit-html").TemplateResult<1>;
  private allStyles;
}
declare global {
  interface HTMLElementTagNameMap {
    "ub-button": UbButton;
  }
}
//# sourceMappingURL=ub-button.d.ts.map
