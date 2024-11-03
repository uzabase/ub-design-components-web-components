import { describe, expect, test } from "vitest";
import { screen } from "shadow-dom-testing-library";

import { UbCheckbox } from "../../src/components/checkbox/ub-checkbox";

customElements.define("ub-checkbox", UbCheckbox);

function getUbCheckbox() {
  return document.querySelector("ub-checkbox") as UbCheckbox;
}

function getCheckbox() {
  return screen.getByShadowRole("checkbox") as HTMLInputElement;
}

describe("ub-checkbox", () => {
  describe("value属性", () => {
    test("value属性を設定すると、チェックボックスのvalue属性にも反映される", async () => {
      document.body.innerHTML = "<ub-checkbox value='value'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.value).toBe("value");
    });

    test("value属性を更新すると、チェックボックスのvalue属性にも反映される", async () => {
      document.body.innerHTML = "<ub-checkbox value='value'></ub-checkbox>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("value", "new-value");

      expect(checkbox.value).toBe("new-value");
    });

    test("value属性を設定しない場合、チェックボックスのvalue属性はデフォルト値のonになる", async () => {
      document.body.innerHTML = "<ub-checkbox></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.value).toBe("on");
    });
  });

  describe("name属性", () => {
    test("name属性を設定すると、チェックボックスのname属性にも反映される", async () => {
      document.body.innerHTML = "<ub-checkbox name='name'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.name).toBe("name");
    });

    test("name属性を更新すると、チェックボックスのname属性にも反映される", async () => {
      document.body.innerHTML = "<ub-checkbox name='name'></ub-checkbox>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("name", "new-name");

      expect(checkbox.name).toBe("new-name");
    });

    test("name属性を設定しない場合、チェックボックスのname属性は空文字列になる", async () => {
      document.body.innerHTML = "<ub-checkbox></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.name).toBe("");
    });
  });

  describe("checked属性", () => {
    test("checked属性にtrueを設定すると、チェックボックスがチェックされた状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox checked='true'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(true);
    });

    test("checked属性に空文字列を設定すると、チェックボックスがチェックされた状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox checked></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(true);
    });

    test("checked属性にfalseを設定すると、チェックボックスがチェックされていない状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox checked='false'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を更新すると、チェックボックスには更新後の状態が反映される", async () => {
      document.body.innerHTML = "<ub-checkbox checked='true'></ub-checkbox>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("checked", "false");

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を設定しない場合、チェックボックスがチェックされていない状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を設定した場合、チェックボックスのchecked属性にも反映される", async () => {
      document.body.innerHTML = "<ub-checkbox checked='true'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(true);
    });

    test("checked属性を更新した場合、チェックボックスのchecked属性にも反映される", async () => {
      document.body.innerHTML = "<ub-checkbox checked='true'></ub-checkbox>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("checked", "false");

      expect(checkbox.checked).toBe(false);
    });

    test("checked属性を設定しない場合、チェックボックスのchecked属性はfalseになる", async () => {
      document.body.innerHTML = "<ub-checkbox></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.checked).toBe(false);
    });
  });

  describe("indeterminate属性", () => {
    test("indeterminate属性にtrueを設定すると、チェックボックスが未決定状態になる", async () => {
      document.body.innerHTML =
        "<ub-checkbox indeterminate='true'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(true);
    });

    test("indeterminate属性に空文字列を設定すると、チェックボックスが未決定状態になる", async () => {
      document.body.innerHTML = "<ub-checkbox indeterminate></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(true);
    });

    test("indeterminate属性にfalseを設定すると、チェックボックスが未決定状態にならない", async () => {
      document.body.innerHTML =
        "<ub-checkbox indeterminate='false'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(false);
    });

    test("indeterminate属性を更新すると、チェックボックスには更新後の状態が反映される", async () => {
      document.body.innerHTML =
        "<ub-checkbox indeterminate='true'></ub-checkbox>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("indeterminate", "false");

      expect(checkbox.indeterminate).toBe(false);
    });

    test("indeterminate属性を設定しない場合、チェックボックスが未決定状態にならない", async () => {
      document.body.innerHTML = "<ub-checkbox></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.indeterminate).toBe(false);
    });
  });

  describe("disabled属性", () => {
    test("disabled属性にtrueを設定すると、チェックボックスが無効になる", async () => {
      document.body.innerHTML = "<ub-checkbox disabled='true'></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.disabled).toBe(true);
    });

    test("disabled属性に空文字列を設定すると、チェックボックスが無効になる", async () => {
      document.body.innerHTML = "<ub-checkbox disabled></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.disabled).toBe(true);
    });

    test("disabled属性にfalseを設定すると、チェックボックスが有効になる", async () => {
      document.body.innerHTML = "<ub-checkbox disabled='false'></ub-checkbox>";

      const button = getCheckbox();

      expect(button.disabled).toBe(false);
    });

    test("disabled属性を更新すると、チェックボックスには更新後の状態が反映される", async () => {
      document.body.innerHTML = "<ub-checkbox disabled='true'></ub-checkbox>";

      const ubCheckbox = getUbCheckbox();
      const checkbox = getCheckbox();

      ubCheckbox.setAttribute("disabled", "false");

      expect(checkbox.disabled).toBe(false);
    });

    test("disabled属性を設定しない場合、チェックボックスが有効になる", async () => {
      document.body.innerHTML = "<ub-checkbox></ub-checkbox>";

      const checkbox = getCheckbox();

      expect(checkbox.disabled).toBe(false);
    });
  });

  describe("フォームの部品として正しく機能する", () => {
    function getForm() {
      return screen.getByRole("form") as HTMLFormElement;
    }

    test("フォームからチェックボックスの値を取得できる", async () => {
      document.body.innerHTML = `
        <form role="form">
          <ub-checkbox name="agreement" value="yes" checked></ub-checkbox>
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
          <ub-checkbox name="agreement" value="yes" checked></ub-checkbox>
        </form>
      `;

      const form = getForm();
      form.reset();
      const checkbox = getCheckbox();
      expect(checkbox.checked).toBe(false);
    });
  });
});
