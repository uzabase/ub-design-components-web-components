import {
  getByShadowRole,
  queryByShadowText,
  screen,
} from "shadow-dom-testing-library";
import { describe, expect, test } from "vitest";

import { UbRadioButtonTextGroup } from "../../src/components/radio/ub-radio-button-text-group";

customElements.define("ub-radio-button-text-group", UbRadioButtonTextGroup);

function getUbRadioButtonTextGroup() {
  return document.querySelector(
    "ub-radio-button-text-group",
  ) as UbRadioButtonTextGroup;
}

function getRadioGroup() {
  return screen.getByShadowRole("radiogroup");
}

function getRadioGroupItems() {
  return screen.getAllByShadowRole("listitem");
}

function getRadioButtons() {
  return screen.getAllByShadowRole("radio") as HTMLInputElement[];
}

function getRadioButtonByLabelText(text: string) {
  return screen.getByShadowLabelText(text) as HTMLInputElement;
}

describe("ub-radio-button-text-group", () => {
  describe("name属性", () => {
    test("name属性を設定すると、その値が各ラジオボタンのname属性にも設定される", async () => {
      document.body.innerHTML =
        "<ub-radio-button-text-group name='interests'></ub-radio-button-text-group>";

      const ubRadioButtonTextGroup = getUbRadioButtonTextGroup();
      ubRadioButtonTextGroup.data = [
        { text: "text1" },
        { text: "text2" },
        { text: "text3" },
      ];

      const radioButtons = getRadioButtons();
      radioButtons.forEach((radioButton) => {
        expect(radioButton.getAttribute("name")).toBe("interests");
      });
    });

    test("name属性を設定しない場合、各ラジオボタンのname属性も設定されない", async () => {
      document.body.innerHTML =
        "<ub-radio-button-text-group></ub-radio-button-text-group>";

      const ubRadioButtonTextGroup = getUbRadioButtonTextGroup();
      ubRadioButtonTextGroup.data = [
        { text: "text1" },
        { text: "text2" },
        { text: "text3" },
      ];

      const radioButtons = getRadioButtons();
      radioButtons.forEach((radioButton) => {
        expect(radioButton.getAttribute("name")).toBeNull();
      });
    });

    test("name属性を更新すると、各ラジオボタンのname属性も更新される", async () => {
      document.body.innerHTML =
        "<ub-radio-button-text-group name='interests'></ub-radio-button-text-group>";

      const ubRadioButtonTextGroup = getUbRadioButtonTextGroup();
      ubRadioButtonTextGroup.data = [
        { text: "text1" },
        { text: "text2" },
        { text: "text3" },
      ];

      ubRadioButtonTextGroup.setAttribute("name", "hobbies");

      const radioButtons = getRadioButtons();
      radioButtons.forEach((radioButton) => {
        expect(radioButton.getAttribute("name")).toBe("hobbies");
      });
    });
  });

  describe("direction属性", () => {
    test.each([
      ["horizontal", "horizontal"],
      ["vertical", "vertical"],
    ])(
      "direction属性に%sを設定すると、クラスに%sが設定される",
      async (type, className) => {
        document.body.innerHTML = `<ub-radio-button-text-group direction=${type}></ub-radio-button-text-group>`;

        const radioGroup = getRadioGroup();

        expect(radioGroup.classList.contains(className)).toBe(true);
      },
    );

    test("direction属性を設定しない場合、クラスにデフォルト値のhorizontalが設定される", async () => {
      document.body.innerHTML =
        "<ub-radio-button-text-group></ub-radio-button-text-group>";

      const radioGroup = getRadioGroup();

      expect(radioGroup.classList.contains("horizontal")).toBe(true);
    });

    test("direction属性を更新すると、クラスから古い値が削除され、新しい値が設定される", async () => {
      document.body.innerHTML =
        "<ub-radio-button-text-group direction='vertical'></ub-radio-button-text-group>";

      const ubRadioButtonTextGroup = getUbRadioButtonTextGroup();
      const radioGroup = getRadioGroup();

      ubRadioButtonTextGroup.setAttribute("direction", "horizontal");

      expect(radioGroup.classList.contains("vertical")).toBe(false);
      expect(radioGroup.classList.contains("horizontal")).toBe(true);
    });

    test("無効なdirection属性を設定すると、クラスにデフォルト値のhorizontalが設定される", async () => {
      document.body.innerHTML =
        "<ub-radio-button-text-group direction='invalid'></ub-radio-button-text-group>";

      const radioGroup = getRadioGroup();

      expect(radioGroup.classList.contains("horizontal")).toBe(true);
    });
  });

  describe("json-data属性", () => {
    function getRadioButton(radioGroupItem: HTMLElement) {
      return getByShadowRole(radioGroupItem, "radio") as HTMLInputElement;
    }

    function queryRadioButtonLabelText(
      radioGroupItem: HTMLElement,
      text: string,
    ) {
      return queryByShadowText(radioGroupItem, text) as HTMLElement;
    }

    test("json-data属性を設定すると、その値に対応するラジオボタンが表示される", async () => {
      const jsonData = [
        {
          text: "text1",
          value: "value1",
          checked: false,
          disabled: false,
        },
        {
          text: "text2",
          checked: true,
        },
        {
          text: "text3",
          value: "value3",
          checked: false,
          disabled: true,
        },
      ];

      document.body.innerHTML = `<ub-radio-button-text-group json-data='${JSON.stringify(jsonData)}'></ub-radio-button-text-group>`;

      const radioGroupItems = getRadioGroupItems();
      expect(radioGroupItems).toHaveLength(3);

      radioGroupItems.forEach((radioGroupItem, index) => {
        const { text, value, checked, disabled } = jsonData[index];

        const radioButton = getRadioButton(radioGroupItem);
        const radioButtonLabel = queryRadioButtonLabelText(
          radioGroupItem,
          text,
        );

        expect(radioButton.value).toBe(value ?? "on");
        expect(radioButtonLabel).not.toBeNull();
        expect(radioButton.checked).toBe(checked);
        expect(radioButton.disabled).toBe(disabled ?? false);
      });
    });
  });

  describe("フォームの部品として正しく機能する", () => {
    function getForm() {
      return screen.getByShadowRole("form") as HTMLFormElement;
    }

    test("フォームからラジオグループの値を取得できる", async () => {
      const jsonData = [
        { text: "text1", value: "value1" },
        { text: "text2", value: "value2", checked: true },
        { text: "text3", value: "value3" },
      ];

      document.body.innerHTML = `
        <form role="form">
          <ub-radio-button-text-group name="interests" json-data='${JSON.stringify(jsonData)}'></ub-radio-button-text-group>
        </form>
      `;

      const form = getForm();
      const formData = new FormData(form);
      const interests = formData.get("interests");

      expect(interests).toBe("value2");
    });

    test("フォームをリセットすると、ラジオグループの状態がリセットされる", async () => {
      const jsonData = [
        { text: "text1", value: "value1" },
        { text: "text2", value: "value2", checked: true },
        { text: "text3", value: "value3" },
      ];

      document.body.innerHTML = `
        <form role="form">
          <ub-radio-button-text-group name="interests" json-data='${JSON.stringify(jsonData)}'></ub-radio-button-text-group>
        </form>
      `;

      const form = getForm();
      form.reset();

      const formData = new FormData(form);
      const interests = formData.get("interests");

      expect(interests).toBeNull();
    });
  });

  test("それぞれのラジオボタンとラベルが関連付けられている", async () => {
    const jsonData = [
      { text: "text1", value: "value1" },
      { text: "text2", value: "value2" },
      { text: "text3", value: "value3" },
    ];

    document.body.innerHTML = `<ub-radio-button-text-group json-data='${JSON.stringify(jsonData)}'></ub-radio-button-text-group>`;

    jsonData.forEach(({ text, value }) => {
      const radioButton = getRadioButtonByLabelText(text);

      expect(radioButton.value).toBe(value);
    });
  });
});
