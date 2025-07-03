type Placement = "top" | "bottom" | "left" | "right";
type Size = "auto" | "width240" | "width320" | "width400";

/**
 * UbTooltipは、要素にマウスオーバーした際に補足情報を表示するコンポーネントです。
 * ツールチップを表示する場所、ツールチップの大きさ、表示する文字、z-indexを指定できます。
 *
 * @element ub-tooltip
 * @summary ツールチップコンポーネント
 */
export class UbTooltip extends HTMLElement {
  #placement: Placement = "top";
  #size: Size = "auto";
  #zindex: string = "10";
  #label: string = "";
  #showTooltip: boolean = false;
  #affiliation: HTMLElement | null = null;

  /**
   * ツールチップのラベル
   *
   * @attribute
   * @type {string}
   * @default "";
   */

  get placement() {
    return this.#placement;
  }
  set placement(value: Placement) {
    this.#placement = value;
  }

  get size() {
    return this.#size;
  }
  set size(value: Size) {
    this.#size = value;
  }

  get zindex() {
    return this.#zindex;
  }
  set zindex(value: string) {
    this.#zindex = value;
  }

  get label() {
    return this.#label;
  }
  set label(value: string) {
    this.#label = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  #isValidPlacement(value: string): value is Placement {
    return ["top", "bottom", "left", "right"].includes(value);
  }

  #isValidSize(value: string): value is Size {
    return ["auto", "width240", "width320", "width400"].includes(value);
  }

  connectedCallback() {
    this.#label = this.getAttribute("label") || "";
    const placementAttr = this.getAttribute("placement");
    this.#placement = this.#isValidPlacement(placementAttr || "")
      ? (placementAttr as Placement)
      : "top";

    const sizeAttr = this.getAttribute("size");
    this.#size = this.#isValidSize(sizeAttr || "")
      ? (sizeAttr as Size)
      : "auto";

    this.#zindex = this.getAttribute("zindex") || "10";
    this.#render();
  }

  disconnectedCallback() {
    if (this.#affiliation) {
      this.#affiliation.removeEventListener(
        "mouseenter",
        this.#handleMouseEnter,
      );
      this.#affiliation.removeEventListener(
        "mouseleave",
        this.#handleMouseLeave,
      );
    }
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === "label") this.#label = newValue;
    if (name === "placement") this.#placement = newValue as Placement;
    if (name === "size") this.#size = newValue as Size;
    if (name === "zindex") this.#zindex = newValue;
    this.#render();
  }

  #handleMouseEnter = () => {
    this.#showTooltip = true;
    this.#render();
  };

  #handleMouseLeave = () => {
    this.#showTooltip = false;
    this.#render();
  };

  #render() {
    if (!this.shadowRoot) return;

    // affiliation要素が存在するかチェック
    let affiliationElement = this.shadowRoot.querySelector(
      ".tooltip__affiliation",
    );
    if (!affiliationElement) {
      affiliationElement = document.createElement("div");
      affiliationElement.className = "tooltip__affiliation";
      const slot = document.createElement("slot");
      affiliationElement.appendChild(slot);
      this.shadowRoot.appendChild(affiliationElement);
      this.#affiliation = affiliationElement as HTMLElement;

      // イベントリスナーを追加
      this.#affiliation.addEventListener("mouseenter", this.#handleMouseEnter);
      this.#affiliation.addEventListener("mouseleave", this.#handleMouseLeave);
    }

    // 既存のtooltipを削除
    const existingTooltip = this.shadowRoot.querySelector(".tooltip__main");
    if (existingTooltip) {
      existingTooltip.remove();
    }

    // ツールチップが表示される場合のみ作成
    if (this.#showTooltip) {
      const tooltipElement = document.createElement("div");
      tooltipElement.className = `tooltip__main ${this.#size}`;
      tooltipElement.style.zIndex = this.#zindex;
      tooltipElement.setAttribute("data-popper-placement", this.#placement);

      const labelElement = document.createElement("span");
      labelElement.className = "tooltip__label";
      labelElement.textContent = this.#label;

      const arrowElement = document.createElement("div");
      arrowElement.className = "tooltip__arrow";
      arrowElement.setAttribute("data-popper-arrow", "");

      tooltipElement.appendChild(labelElement);
      tooltipElement.appendChild(arrowElement);

      this.shadowRoot.appendChild(tooltipElement);
    }
  }
}
