type Size = "small" | "medium";

const sizes: Size[] = ["small", "medium"];

function isValidSize(value: string): value is Size {
  return sizes.some((size) => size === value);
}

/**
 * UbIconは、デザインシステム2.0におけるアイコンコンポーネントです。
 * 異なるタイプとサイズのアイコンを表示することができます。
 *
 * @element ub-icon
 * @summary アイコンコンポーネント
 */
export class UbIcon extends HTMLElement {
  #size: Size = "medium";

  #svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  /**
   * アイコンのタイプ
   * 指定されたタイプに対応するSVGパスが表示されます
   *
   * @attribute
   * @type {string}
   */
  set type(value: string) {
    this.#svgElement.innerHTML = value in this.paths ? this.paths[value] : "";
  }

  /**
   * アイコンのアクセシビリティテキスト
   * スクリーンリーダーなどの支援技術で読み上げられるテキストを設定します
   *
   * @attribute
   * @type {string}
   */
  set text(value: string) {
    this.#svgElement.setAttribute("aria-label", value);
  }

  /**
   * アイコンのサイズ（"small"または"medium"）
   * - "small": 小サイズ
   * - "medium": 中サイズ
   *
   * @attribute
   * @type {"small"|"medium"}
   * @default "medium"
   */
  get size() {
    return this.#size;
  }
  set size(value: Size) {
    const sizeClassList = {
      small: "size__small",
      medium: "size__medium",
    };
    this.#svgElement.classList.remove(sizeClassList[this.#size]);
    this.#svgElement.classList.add(sizeClassList[value]);
    this.#size = value;
  }

  static get observedAttributes() {
    return ["type", "text", "size"];
  }

  paths: Record<string, string> = {};

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.size = "medium";
  }

  connectedCallback() {
    this.#svgElement.setAttribute("role", "img");
    this.#svgElement.setAttribute("viewBox", "0 0 24 24");
    this.#svgElement.classList.add("icon");
    this.shadowRoot!.appendChild(this.#svgElement);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    switch (name) {
      case "type":
        this.type = newValue;
        break;
      case "text":
        this.text = newValue;
        break;
      case "size":
        if (isValidSize(newValue)) {
          this.size = newValue;
        } else {
          console.warn(`${newValue}は無効なsize属性です。`);
          this.size = "medium";
        }
        break;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-icon": UbIcon;
  }
}
