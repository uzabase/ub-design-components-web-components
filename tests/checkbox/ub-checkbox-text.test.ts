import { screen } from "shadow-dom-testing-library";
import { describe, expect, test } from "vitest";

import { UbCheckboxText } from "../../src/components/checkbox/ub-checkbox-text";

customElements.define("ub-checkbox-text", UbCheckboxText);

function getUbCheckbox() {
  return document.querySelector("ub-checkbox-text") as UbCheckboxText;
}

function getCheckbox() {
  return screen.getByShadowRole("checkbox") as HTMLInputElement;
}

function getCheckboxByLabelText(text: string) {
  return screen.getByShadowLabelText(text) as HTMLInputElement;
}

function queryText(text: string) {
  return screen.queryByShadowText(text);
}

describe("ub-checkbox-text", () => {
  describe("value属性", () => {
    test("value属性を設定すると、チェックボックスのvalue属性にも反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text value='value'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.value).toBe("value");
    });

    test("value属性を更新すると、チェックボックスのvalue属性にも反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text value='value'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("value", "new-value");

      expect(checkbox.value).toBe("new-value");
    });

    test("value属性を設定しない場合、チェックボックスのvalue属性はデフォルト値のonになる", async () => {
      document.body.innerHTML = "<ub-checkbox-text></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.value).toBe("on");
    });
  });

  describe("name属性", () => {
    test("name属性を設定すると、チェックボックスのname属性にも反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text name='name'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.name).toBe("name");
    });

    test("name属性を更新すると、チェックボックスのname属性にも反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text name='name'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("name", "new-name");

      expect(checkbox.name).toBe("new-name");
    });

    test("name属性を設定しない場合、チェックボックスのname属性は空文字列になる", async () => {
      document.body.innerHTML = "<ub-checkbox-text></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.name).toBe("");
    });
  });

  describe("checked属性", () => {
    test("checked属性にtrueを設定すると、チェックボックスがチェックされた状態になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text checked='true'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(true);
    });

    test("checked属性に空文字列を設定すると、チェックボックスがチェックされた状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox-text checked></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(true);
    });

    test("checked属性にfalseを設定すると、チェックボックスがチェックされていない状態になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text checked='false'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を更新すると、チェックボックスには更新後の状態が反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text checked='true'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("checked", "false");

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を設定しない場合、チェックボックスがチェックされていない状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox-text></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を設定した場合、チェックボックスのchecked属性にも反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text checked='true'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(true);
    });

    test("checked属性を更新した場合、チェックボックスのchecked属性にも反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text checked='true'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("checked", "false");

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を設定しない場合、チェックボックスのchecked属性はfalseになる", async () => {
      document.body.innerHTML = "<ub-checkbox-text></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(false);
    });
  });

  describe("indeterminate属性", () => {
    test("indeterminate属性にtrueを設定すると、チェックボックスが未決定状態になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text indeterminate='true'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(true);
    });

    test("indeterminate属性に空文字列を設定すると、チェックボックスが未決定状態になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text indeterminate></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(true);
    });

    test("indeterminate属性にfalseを設定すると、チェックボックスが未決定状態にならない", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text indeterminate='false'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(false);
    });

    test("indeterminate属性を更新すると、チェックボックスには更新後の状態が反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text indeterminate='true'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("indeterminate", "false");

      expect(checkbox.indeterminate).toBe(false);
    });

    test("indeterminate属性を設定しない場合、チェックボックスが未決定状態にならない", async () => {
      document.body.innerHTML = "<ub-checkbox-text></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(false);
    });
  });

  describe("disabled属性", () => {
    test("disabled属性にtrueを設定すると、チェックボックスが無効になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text disabled='true'></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.disabled).toBe(true);
    });

    test("disabled属性に空文字列を設定すると、チェックボックスが無効になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text disabled></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.disabled).toBe(true);
    });

    test("disabled属性にfalseを設定すると、チェックボックスが有効になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text disabled='false'></ub-checkbox-text>";

      const button = getCheckbox();

      expect(button.disabled).toBe(false);
    });

    test("disabled属性を更新すると、チェックボックスには更新後の状態が反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text disabled='true'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("disabled", "false");

      expect(checkbox.disabled).toBe(false);
    });

    test("disabled属性を設定しない場合、チェックボックスが有効になる", async () => {
      document.body.innerHTML = "<ub-checkbox-text></ub-checkbox-text>";

      const checkbox = getCheckbox();

      expect(checkbox.disabled).toBe(false);
    });
  });

  describe("text属性", () => {
    test("text属性を設定すると、その文字列が表示される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text text='Hello, World!'></ub-checkbox-text>";

      const checkboxText = queryText("Hello, World!");

      expect(checkboxText).not.toBeNull();
    });

    test("text属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox-text text='Hello, World!'></ub-checkbox-text>";

      const ubCheckbox = getUbCheckbox();

      ubCheckbox.setAttribute("text", "Hello, Universe!");

      const checkboxText = queryText("Hello, Universe!");
      expect(checkboxText).not.toBeNull();
    });
  });

  describe("フォームの部品として正しく機能する", () => {
    function getForm() {
      return screen.getByRole("form") as HTMLFormElement;
    }

    test("フォームからチェックボックスの値を取得できる", async () => {
      document.body.innerHTML = `
        <form role="form">
          <ub-checkbox-text name="agreement" value="yes" checked></ub-checkbox-text>
        </form>
      `;

      const form = getForm();
      const formData = new FormData(form);
      const agreement = formData.get("agreement");

      expect(agreement).toBe("yes");
    });

    test("フォームをリセットすると、チェックボックスの状態がリセットされる", async () => {
      document.body.innerHTML = `
        <form role="form">
          <ub-checkbox-text name="agreement" value="yes" checked></ub-checkbox-text>
        </form>
      `;

      const form = getForm();
      form.reset();
      const checkbox = getCheckbox();
      expect(checkbox.checked).toBe(false);
    });
  });

  test("チェックボックスとラベルが関連付けられている", async () => {
    document.body.innerHTML = `<ub-checkbox-text text="label" value="value"></ub-checkbox-text>`;

    const checkbox = getCheckboxByLabelText("label");

    expect(checkbox.value).toBe("value");
  });
});
