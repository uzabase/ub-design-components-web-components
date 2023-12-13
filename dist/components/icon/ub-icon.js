var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
export let UbIcon = class UbIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.text = "";
        this.type = "";
        this.size = "medium";
        this.viewBox = 24;
    }
    render() {
        return html `
      <svg
        aria-label="${this.text}"
        class="icon ${this.size === "small" ? "size__small" : "size__medium"}"
        viewBox="0 0 ${this.viewBox} ${this.viewBox}"
      >
        <title>${this.text}</title>
        <path d="${this.paths[this.type]}" />
      </svg>
    `;
    }
};
UbIcon.styles = [styles];
__decorate([
    property({ type: String })
], UbIcon.prototype, "text", void 0);
__decorate([
    property({ type: String })
], UbIcon.prototype, "type", void 0);
__decorate([
    property({ type: String })
], UbIcon.prototype, "size", void 0);
UbIcon = __decorate([
    customElement("ub-icon")
], UbIcon);
