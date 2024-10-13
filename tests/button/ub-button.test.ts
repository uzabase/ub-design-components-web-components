import { describe, expect, test } from "vitest";

import { UbButton } from "../../src/components/button/ub-button";

customElements.define("ub-button", UbButton);

function getUbButton() {
  return document.querySelector("ub-button") as UbButton;
}

describe("ub-button", () => {
  describe("text属性", () => {
    test("text属性を設定すると、その文字列が表示される", async () => {
      document.body.innerHTML = "<ub-button text='Hello, World!'></ub-button>";

      const ubButton = getUbButton();
      const span = ubButton.shadowRoot!.querySelector("span")!;

      expect(span.textContent).toBe("Hello, World!");
    });

    test("text属性を設定しない場合、デフォルト値は空文字になる", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const span = ubButton.shadowRoot!.querySelector("span")!;

      expect(span.textContent).toBe("");
    });

    test("text属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button text='Hello, World!'></ub-button>";

      const ubButton = getUbButton();
      const span = ubButton.shadowRoot!.querySelector("span")!;

      ubButton.setAttribute("text", "Hello, Universe!");

      expect(span.textContent).toBe("Hello, Universe!");
    });
  });

  describe("loading属性", () => {
    test("loading属性にtrueを設定すると、クラスにisLoadingが設定される", async () => {
      document.body.innerHTML = "<ub-button loading='true'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isLoading")).toBe(true);
    });

    test("loading属性に空文字列を指定すると、クラスにisLoadingが設定される", async () => {
      document.body.innerHTML = "<ub-button loading></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isLoading")).toBe(true);
    });

    test("loading属性にfalseを設定すると、クラスにisLoadingが設定されない", async () => {
      document.body.innerHTML = "<ub-button loading='false'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isLoading")).toBe(false);
    });

    test("loading属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button loading='true'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      ubButton.setAttribute("loading", "false");

      expect(button.classList.contains("isLoading")).toBe(false);
    });

    test("loading属性を指定しない場合、isLoadingクラスは設定されない", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isLoading")).toBe(false);
    });
  });

  describe("selected属性", () => {
    test("selected属性にtrueを設定すると、クラスにisSelectedが設定される", async () => {
      document.body.innerHTML = "<ub-button selected='true'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isSelected")).toBe(true);
    });

    test("selected属性に空文字列を指定すると、クラスにisSelectedが設定される", async () => {
      document.body.innerHTML = "<ub-button selected></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isSelected")).toBe(true);
    });

    test("selected属性にfalseを設定すると、クラスにisSelectedが設定されない", async () => {
      document.body.innerHTML = "<ub-button selected='false'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isSelected")).toBe(false);
    });

    test("selected属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button selected='true'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      ubButton.setAttribute("selected", "false");

      expect(button.classList.contains("isSelected")).toBe(false);
    });

    test("selected属性を指定しない場合、isSelectedクラスは設定されない", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isSelected")).toBe(false);
    });
  });

  describe("disabled属性", () => {
    test("disabled属性にtrueを設定すると、クラスにisDisableが設定される", async () => {
      document.body.innerHTML = "<ub-button disabled='true'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isDisable")).toBe(true);
    });

    test("disabled属性に空文字列を指定すると、クラスにisDisableが設定される", async () => {
      document.body.innerHTML = "<ub-button disabled></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isDisable")).toBe(true);
    });

    test("disabled属性にfalseを設定すると、クラスにisDisableが設定されない", async () => {
      document.body.innerHTML = "<ub-button disabled='false'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isDisable")).toBe(false);
    });

    test("disabled属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button disabled='true'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      ubButton.setAttribute("disabled", "false");

      expect(button.classList.contains("isDisable")).toBe(false);
    });

    test("disabled属性を指定しない場合、isDisableクラスは設定されない", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("isDisable")).toBe(false);
    });
  });

  describe("type属性", () => {
    test.each([
      ["default", "type__default"],
      ["destructive", "type__destructive"],
    ])(
      "type属性に%sを設定すると、クラスに%sが設定される",
      async (type, className) => {
        document.body.innerHTML = `<ub-button type='${type}'></ub-button>`;

        const ubButton = getUbButton();
        const button = ubButton.shadowRoot!.querySelector("button")!;

        expect(button.classList.contains(className)).toBe(true);
      },
    );

    test("type属性を設定しない場合、デフォルト値はdefaultになる", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("type__default")).toBe(true);
    });

    test("type属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button type='destructive'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      ubButton.setAttribute("type", "default");

      expect(button.classList.contains("type__default")).toBe(true);
    });

    test("無効なtype属性を設定すると、その値は反映されず、デフォルト値が設定される", async () => {
      document.body.innerHTML = "<ub-button type='unknown'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("type__default")).toBe(true);
    });
  });

  describe("appearance属性", () => {
    test.each([
      ["outline", "appearance__outline"],
      ["fill", "appearance__fill"],
      ["text", "appearance__text"],
    ])(
      "appearance属性に%sを設定すると、クラスに%sが設定される",
      async (appearance, className) => {
        document.body.innerHTML = `<ub-button appearance='${appearance}'></ub-button>`;

        const ubButton = getUbButton();
        const button = ubButton.shadowRoot!.querySelector("button")!;

        expect(button.classList.contains(className)).toBe(true);
      },
    );

    test("appearance属性を設定しない場合、デフォルト値はoutlineになる", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("appearance__outline")).toBe(true);
    });

    test("appearance属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button appearance='fill'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      ubButton.setAttribute("appearance", "text");

      expect(button.classList.contains("appearance__text")).toBe(true);
    });

    test("無効なappearance属性を設定すると、その値は反映されず、デフォルト値が設定される", async () => {
      document.body.innerHTML = "<ub-button appearance='unknown'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("appearance__outline")).toBe(true);
    });
  });

  describe("size属性", () => {
    test.each([
      ["medium", "size__medium"],
      ["large", "size__large"],
      ["xLarge", "size__xLarge"],
      ["width160", "size__width160"],
      ["width80", "size__width80"],
    ])(
      "size属性に%sを設定すると、クラスに%sが設定される",
      async (size, className) => {
        document.body.innerHTML = `<ub-button size='${size}'></ub-button>`;

        const ubButton = getUbButton();
        const button = ubButton.shadowRoot!.querySelector("button")!;

        expect(button.classList.contains(className)).toBe(true);
      },
    );

    test("size属性を設定しない場合、デフォルト値はmediumになる", async () => {
      document.body.innerHTML = "<ub-button></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("size__medium")).toBe(true);
    });

    test("size属性を更新すると、更新後の値が反映される", async () => {
      document.body.innerHTML = "<ub-button size='large'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      ubButton.setAttribute("size", "xLarge");

      expect(button.classList.contains("size__xLarge")).toBe(true);
    });

    test("無効なsize属性を設定すると、その値は反映されず、デフォルト値が設定される", async () => {
      document.body.innerHTML = "<ub-button size='unknown'></ub-button>";

      const ubButton = getUbButton();
      const button = ubButton.shadowRoot!.querySelector("button")!;

      expect(button.classList.contains("size__medium")).toBe(true);
    });
  });

  // TODO: onclickイベントのテストを追加
});
