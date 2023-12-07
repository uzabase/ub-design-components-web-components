var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from "lit/development/decorators";
import { html, LitElement } from "lit/development";
// @ts-ignore
import resetStyle from "@acab/reset.css?inline" assert { type: "css" };
const styles = new CSSStyleSheet();
styles.replaceSync(resetStyle);
export let UbIcon = class UbIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.label = ""; //TODO label => titleとか？
        this.color = "black"; //TODO primitiveな名前でいいのか？
        this.size = "medium";
        this.viewBox = 25;
        this.path = "";
        this.allStyles = () => {
            const styles = ["spdsIcon"]; //TODO class名変える
            switch (this.color) {
                case "black":
                    styles.push("color__black");
                    break;
                case "white":
                    styles.push("color__white");
                    break;
                default:
                    styles.push("color__black");
                    break;
            }
            switch (this.size) {
                case "small":
                    styles.push("size__small");
                    break;
                case "medium":
                    styles.push("size__medium");
                    break;
                case "large":
                    styles.push("size__large");
                    break;
                default:
                    styles.push("size__medium");
                    break;
            }
            return styles.join(" ");
        };
    }
    render() {
        return html `
      <svg
        aria-label="${this.label}"
        class="${this.allStyles()}"
        viewBox="0 0 ${this.viewBox} ${this.viewBox}"
      >
        <title>${this.label}</title>
        <path d="${this.path}" />
      </svg>
    `;
    }
};
UbIcon.styles = [styles];
__decorate([
    property({ type: String })
], UbIcon.prototype, "label", void 0);
__decorate([
    property({ type: String })
], UbIcon.prototype, "color", void 0);
__decorate([
    property({ type: String })
], UbIcon.prototype, "size", void 0);
UbIcon = __decorate([
    customElement("ub-icon")
], UbIcon);