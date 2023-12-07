import { LitElement } from "lit/development";
export declare class UbIcon extends LitElement {
  label: string;
  color?: "black" | "white";
  size?: "small" | "medium" | "large";
  private viewBox;
  private path;
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
