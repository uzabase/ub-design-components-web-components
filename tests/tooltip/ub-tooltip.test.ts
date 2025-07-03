import { describe, expect, test } from "vitest";

import { UbTooltip } from "../../src/components/tooltip/ub-tooltip";

customElements.define("ub-tooltip", UbTooltip);

function getUbTooltip() {
  return document.querySelector("ub-tooltip") as UbTooltip;
}

describe("ub-tooltip", () => {
  describe("基本機能", () => {
    test("コンポーネントが正しく初期化される", () => {
      document.body.innerHTML = "<ub-tooltip></ub-tooltip>";
      const ubTooltip = getUbTooltip();

      expect(ubTooltip).toBeInstanceOf(UbTooltip);
      expect(ubTooltip.shadowRoot).toBeTruthy();
    });

    test("デフォルト値が正しく設定される", () => {
      document.body.innerHTML = "<ub-tooltip></ub-tooltip>";
      const ubTooltip = getUbTooltip();

      expect(ubTooltip.placement).toBe("top");
      expect(ubTooltip.size).toBe("auto");
      expect(ubTooltip.zindex).toBe("10");
      expect(ubTooltip.label).toBe("");
    });
  });

  describe("label属性", () => {
    test("中身のテキストが表示される", async () => {
      document.body.innerHTML =
        "<ub-tooltip label='Hello, Tooltip!'></ub-tooltip>";

      const ubTooltip = getUbTooltip();

      expect(ubTooltip.label).toBe("Hello, Tooltip!");
    });

    test("label属性が空の場合は、空文字が表示される", async () => {
      document.body.innerHTML = "<ub-tooltip></ub-tooltip>";

      const ubTooltip = getUbTooltip();

      expect(ubTooltip.label).toBe("");
    });
  });

  describe("placement属性", () => {
    test("placement属性が正しく渡せている", async () => {
      document.body.innerHTML = "<ub-tooltip placement='bottom'></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.placement).toBe("bottom");
    });

    test("placement属性が無い場合、topが指定される", async () => {
      document.body.innerHTML = "<ub-tooltip></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.placement).toBe("top");
    });

    test("無効なplacement属性が指定された場合、topが指定される", async () => {
      document.body.innerHTML = "<ub-tooltip placement='invalid'></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.placement).toBe("top");
    });
  });

  describe("size属性", () => {
    test("size属性が正しく渡せている", async () => {
      document.body.innerHTML = "<ub-tooltip size='width240'></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.size).toBe("width240");
    });

    test("size属性が無い場合、autoが指定される", async () => {
      document.body.innerHTML = "<ub-tooltip></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.size).toBe("auto");
    });

    test("無効なsize属性が指定された場合、autoが指定される", async () => {
      document.body.innerHTML = "<ub-tooltip size='invalid'></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.size).toBe("auto");
    });
  });

  describe("zindex属性", () => {
    test("zindex属性が正しく渡せている", async () => {
      document.body.innerHTML = "<ub-tooltip zindex='100'></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.zindex).toBe("100");
    });

    test("zindex属性が無い場合、10が指定される", async () => {
      document.body.innerHTML = "<ub-tooltip></ub-tooltip>";
      const ubTooltip = getUbTooltip();
      expect(ubTooltip.zindex).toBe("10");
    });
  });

  describe("マウスイベント", () => {
    test("mouseenterでツールチップが表示される", () => {
      document.body.innerHTML =
        "<ub-tooltip label='Test Tooltip'></ub-tooltip>";
      const ubTooltip = getUbTooltip();

      // 初期状態ではツールチップが表示されていない
      const initialTooltip =
        ubTooltip.shadowRoot?.querySelector(".tooltip__main");
      expect(initialTooltip).toBeNull();

      // mouseenterイベントを発火
      const affiliationElement = ubTooltip.shadowRoot?.querySelector(
        ".tooltip__affiliation",
      );
      affiliationElement?.dispatchEvent(new MouseEvent("mouseenter"));

      // ツールチップが表示される
      const tooltip = ubTooltip.shadowRoot?.querySelector(".tooltip__main");
      expect(tooltip).toBeTruthy();
      expect(tooltip?.textContent?.trim()).toBe("Test Tooltip");
    });

    test("mouseleaveでツールチップが非表示になる", () => {
      document.body.innerHTML =
        "<ub-tooltip label='Test Tooltip'></ub-tooltip>";
      const ubTooltip = getUbTooltip();

      // まず表示させる
      const affiliationElement = ubTooltip.shadowRoot?.querySelector(
        ".tooltip__affiliation",
      );
      affiliationElement?.dispatchEvent(new MouseEvent("mouseenter"));

      // ツールチップが表示されていることを確認
      let tooltip = ubTooltip.shadowRoot?.querySelector(".tooltip__main");
      expect(tooltip).toBeTruthy();

      // mouseleaveイベントを発火
      affiliationElement?.dispatchEvent(new MouseEvent("mouseleave"));

      // ツールチップが非表示になる
      tooltip = ubTooltip.shadowRoot?.querySelector(".tooltip__main");
      expect(tooltip).toBeNull();
    });
  });

  describe("ツールチップの表示", () => {
    test("ツールチップの要素が正しく作成される", () => {
      document.body.innerHTML =
        "<ub-tooltip label='Test' placement='bottom' size='width240' zindex='100'></ub-tooltip>";
      const ubTooltip = getUbTooltip();

      // ツールチップを表示
      const affiliationElement = ubTooltip.shadowRoot?.querySelector(
        ".tooltip__affiliation",
      );
      affiliationElement?.dispatchEvent(new MouseEvent("mouseenter"));

      const tooltip = ubTooltip.shadowRoot?.querySelector(".tooltip__main");
      expect(tooltip).toBeTruthy();
      expect(tooltip?.className).toContain("tooltip__main");
      expect(tooltip?.className).toContain("width240");
      expect(tooltip?.getAttribute("data-popper-placement")).toBe("bottom");
      expect((tooltip as HTMLElement)?.style.zIndex).toBe("100");

      // ラベル要素の確認
      const label = tooltip?.querySelector(".tooltip__label");
      expect(label).toBeTruthy();
      expect(label?.textContent).toBe("Test");

      // 矢印要素の確認
      const arrow = tooltip?.querySelector(".tooltip__arrow");
      expect(arrow).toBeTruthy();
      expect(arrow?.getAttribute("data-popper-arrow")).toBe("");
    });

    test("ツールチップが非表示の時は要素が作成されない", () => {
      document.body.innerHTML = "<ub-tooltip label='Test'></ub-tooltip>";
      const ubTooltip = getUbTooltip();

      const tooltip = ubTooltip.shadowRoot?.querySelector(".tooltip__main");
      expect(tooltip).toBeNull();
    });
  });
});
