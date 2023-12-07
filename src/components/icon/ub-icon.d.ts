import { LitElement } from "lit";
export declare class UbIcon extends LitElement {
  label: string;
  type: string;
  color?: "black" | "white";
  size?: "small" | "medium" | "large";
  viewBox: number;
  paths: Object;
  static styles: CSSStyleSheet[];
  render(): import("lit-html").TemplateResult<1>;
  allStyles: () => string;
}
declare global {
  interface HTMLElementTagNameMap {
    "ub-icon": UbIcon;
  }
}
//# sourceMappingURL=ub-icon.d.ts.map
