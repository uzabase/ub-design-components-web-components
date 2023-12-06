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
export let UbButton = class UbButton extends LitElement {
    constructor() {
        super(...arguments);
        this.text = "";
        this.loading = false;
        this.selected = false;
        this.disabled = false;
        this.type = "default";
        this.appearance = "outline";
        this.size = "medium";
        this.allStyles = () => {
            const styles = ["base"];
            switch (this.type) {
                case "default":
                    styles.push("type__default");
                    break;
                case "destructive":
                    styles.push("type__destructive");
                    break;
                default:
                    styles.push("type__default");
                    break;
            }
            switch (this.appearance) {
                case "outline":
                    styles.push("appearance__outline");
                    break;
                case "fill":
                    styles.push("appearance__fill");
                    break;
                case "text":
                    styles.push("appearance__text");
                    break;
                default:
                    styles.push("appearance__outline");
                    break;
            }
            switch (this.size) {
                case "medium":
                    styles.push("size__medium");
                    break;
                case "large":
                    styles.push("size__large");
                    break;
                case "xLarge":
                    styles.push("size__xLarge");
                    break;
                case "width160":
                    styles.push("size__width160");
                    break;
                case "width80":
                    styles.push("size__width80");
                    break;
                default:
                    styles.push("size__medium");
                    break;
            }
            if (this.disabled)
                styles.push("isDisable");
            if (this.selected)
                styles.push("isSelected");
            if (this.loading)
                styles.push("isLoading");
            return styles.join(" ");
        };
    }
    render() {
        return html `
      <button
        class="${this.allStyles()}"
        .disabled=${this.disabled || this.loading}
      >
        <span class="base__text">${this.text}</span>
      </button>
    `;
    }
};
UbButton.styles = [styles];
__decorate([
    property({ type: String })
], UbButton.prototype, "text", void 0);
__decorate([
    property({ type: Boolean })
], UbButton.prototype, "loading", void 0);
__decorate([
    property({ type: Boolean })
], UbButton.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean })
], UbButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], UbButton.prototype, "type", void 0);
__decorate([
    property({ type: String })
], UbButton.prototype, "appearance", void 0);
__decorate([
    property({ type: String })
], UbButton.prototype, "size", void 0);
UbButton = __decorate([
    customElement("ub-button")
], UbButton);
