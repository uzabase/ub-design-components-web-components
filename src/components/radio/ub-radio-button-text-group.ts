type Direction = "horizontal" | "vertical";

const directions: Direction[] = ["horizontal", "vertical"];

function isValidDirection(value: string): value is Direction {
  return directions.some((direction) => direction === value);
}

type Data = {
  text: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
};

/**
 * UbRadioButtonTextGroupは、デザインシステム2.0におけるラジオボタングループコンポーネントです。
 * テキスト付きラジオボタンを水平または垂直方向に配置し、フォームと連携することができます。
 *
 * フォーム内で使用する場合、name属性を設定することでフォーム送信時に選択されたラジオボタンの値が送信されます。
 * フォームのリセット時には、ラジオボタンの選択状態もリセットされます。
 *
 * @element ub-radio-button-text-group
 * @summary テキスト付きラジオボタングループコンポーネント
 */
export class UbRadioButtonTextGroup extends HTMLElement {
  #name: string = "";
  #direction: Direction = "horizontal";
  #data: Data[] = [];
  #innerElement = document.createElement("ul");
  #inputElements: HTMLInputElement[] = [];

  /**
   * ラジオボタングループの名前
   *
   * @attribute
   * @type {string}
   * @default ""
   */
  get name() {
    return this.#name;
  }
  set name(value: string) {
    this.#inputElements.map((element) => element.setAttribute("name", value));
    this.setAttribute("name", value);
    this.#name = value;
  }

  /**
   * ラジオボタングループの配置方向（"horizontal"または"vertical"）
   * - "horizontal": 水平方向に配置
   * - "vertical": 垂直方向に配置
   *
   * @attribute
   * @type {"horizontal"|"vertical"}
   * @default "horizontal"
   */
  set direction(value: Direction) {
    const _value: Direction = value === "vertical" ? "vertical" : "horizontal";
    this.#innerElement.classList.remove(this.#direction);
    this.#innerElement.classList.add(_value);
    this.#direction = _value;
  }

  /**
   * ラジオボタンのデータ配列
   * 各データは次のプロパティを持つことができます：
   * - text: ラジオボタンのラベルテキスト（必須）
   * - value: ラジオボタンの値（省略時は "on" が設定されます）
   * - checked: ラジオボタンの初期チェック状態（省略時は false）
   * - disabled: ラジオボタンの無効状態（省略時は false）
   *
   * @attribute json-data
   * @type {Data[]}
   * @default []
   */
  get data() {
    return this.#data;
  }
  set data(value: Data[]) {
    this.#data = value;
    this.#renderRadioButtons();
  }

  static get observedAttributes() {
    return ["name", "direction", "json-data"];
  }

  protected internals: ElementInternals;
  static formAssociated = true;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.internals = this.attachInternals();

    this.direction = "horizontal";
  }

  connectedCallback() {
    this.#innerElement.classList.add("base");
    this.#innerElement.setAttribute("role", "radiogroup");
    this.shadowRoot!.appendChild(this.#innerElement);
    this.#renderRadioButtons();
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    switch (name) {
      case "name":
        this.name = newValue;
        break;
      case "direction":
        if (isValidDirection(newValue)) {
          this.direction = newValue;
        } else {
          this.direction = "horizontal";
        }
        break;
      case "json-data":
        if (newValue === null) {
          this.data = [];
        } else {
          this.data = JSON.parse(newValue);
        }
        break;
    }
  }

  formResetCallback() {
    this.#inputElements.map((element) => (element.checked = false));
    this.internals.setFormValue(null);
  }

  #renderRadioButtons() {
    this.#innerElement.innerHTML = "";
    this.#inputElements = [];
    this.data.map((data, index) => {
      const ListElement = document.createElement("li");
      const inputElement = document.createElement("input");
      const radioElement = document.createElement("span");
      const labelElement = document.createElement("label");
      const labelInnerElement = document.createElement("span");
      const value = data.value || "on";
      ListElement.classList.add("item");
      inputElement.setAttribute("type", "radio");
      inputElement.setAttribute("value", value);
      if (this.name !== "") inputElement.setAttribute("name", this.name);
      inputElement.setAttribute("id", "radioButton" + index);
      inputElement.checked = data.checked ?? false;
      inputElement.disabled = data.disabled ?? false;
      if (data.checked) this.internals.setFormValue(value);
      inputElement.classList.add("input");
      inputElement.addEventListener("change", (e) => this.#handleOnChange(e));
      this.#inputElements.push(inputElement);
      radioElement.classList.add("radio");
      labelElement.classList.add("text");
      labelElement.setAttribute("for", "radioButton" + index);
      labelElement.setAttribute("aria-labeledby", "radioButtonLabel" + index);
      labelInnerElement.setAttribute("aria-hidden", "true");
      labelInnerElement.setAttribute("id", "radioButtonLabel" + index);
      labelInnerElement.classList.add("text-inner");
      labelInnerElement.innerText = data.text;
      radioElement.appendChild(inputElement);
      ListElement.appendChild(radioElement);
      labelElement.appendChild(labelInnerElement);
      ListElement.appendChild(labelElement);
      this.#innerElement.appendChild(ListElement);
    });
  }

  #handleOnChange(event: Event) {
    const value = (event.currentTarget as HTMLInputElement).value;
    this.internals.setFormValue(value);
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          value,
        },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ub-radio-button-text-group": UbRadioButtonTextGroup;
  }
}
