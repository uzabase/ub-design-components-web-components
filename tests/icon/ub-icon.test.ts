import { screen } from "shadow-dom-testing-library";
import { describe, expect, test } from "vitest";

import { UbIcon } from "../../src/components/icon/ub-icon";

customElements.define("ub-icon", UbIcon);

const iconPaths = {
  edit: '<path d="M16.93 3.5H15.52L3.52 15.5V20.5H8.47L10.47 18.5L9.36 17.44L7.81 18.99H4.98V16.16L12.98 8.16L15.82 10.99L10.47 16.38L11.47 17.44L20.47 8.44V7.04L16.93 3.5ZM16.85 9.95L14.01 7.13L16.22 4.91L19.06 7.74L16.85 9.95Z"></path>',
  search:
    '<path d="M21 19.9199L19.94 20.9799L15.22 16.2599L14.15 15.1899C15.2728 14.3186 16.0498 13.0769 16.3426 11.6861C16.6354 10.2954 16.425 8.84583 15.7489 7.5957C15.0728 6.34556 13.9749 5.37602 12.6507 4.85978C11.3265 4.34354 9.8621 4.31411 8.51825 4.77675C7.1744 5.23938 6.03842 6.16404 5.31264 7.386C4.58686 8.60797 4.31842 10.0479 4.55513 11.4493C4.79185 12.8507 5.51835 14.1226 6.60522 15.0384C7.69209 15.9541 9.06876 16.4544 10.49 16.4499C11.2906 16.4535 12.0834 16.2936 12.82 15.9799L13.94 17.0999C12.2959 17.954 10.3934 18.1676 8.60089 17.6993C6.80838 17.2309 5.25346 16.114 4.23728 14.5649C3.22111 13.0158 2.81599 11.1446 3.1004 9.31391C3.38481 7.48319 4.33851 5.82316 5.77678 4.65533C7.21504 3.48751 9.03553 2.895 10.8856 2.99256C12.7357 3.09013 14.4838 3.87082 15.7913 5.18343C17.0988 6.49605 17.8726 8.24718 17.9629 10.0977C18.0531 11.9481 17.4535 13.7663 16.28 15.1999L21 19.9199Z"></path>',
};

function getUbIcon() {
  return document.querySelector("ub-icon") as UbIcon;
}

function getIcon() {
  return screen.getByShadowRole("img");
}

describe("ub-icon", () => {
  describe("type属性", () => {
    test("type属性を設定すると、その値に対応するアイコンが表示される", async () => {
      document.body.innerHTML = "<ub-icon></ub-icon>";

      const ubIcon = getUbIcon();
      const icon = getIcon();

      ubIcon.paths = iconPaths;
      ubIcon.setAttribute("type", "edit");

      expect(icon.innerHTML).toBe(iconPaths.edit);
    });

    test("type属性を設定しない場合、何も表示されない", async () => {
      document.body.innerHTML = "<ub-icon></ub-icon>";

      const icon = getIcon();

      expect(icon.innerHTML).toBe("");
    });

    test("type属性を更新すると、更新後の値に対応するアイコンが表示される", async () => {
      document.body.innerHTML = "<ub-icon></ub-icon>";

      const ubIcon = getUbIcon();
      const icon = getIcon();

      ubIcon.paths = iconPaths;
      ubIcon.setAttribute("type", "edit");
      ubIcon.setAttribute("type", "search");

      expect(icon.innerHTML).toBe(iconPaths.search);
    });

    test("無効なtype属性を設定すると、何も表示されない", async () => {
      document.body.innerHTML = "<ub-icon></ub-icon>";

      const ubIcon = getUbIcon();
      const icon = getIcon();

      ubIcon.paths = iconPaths;
      ubIcon.setAttribute("type", "invalid");

      expect(icon.innerHTML).toBe("");
    });
  });

  describe("text属性", () => {
    test("text属性を設定すると、その文字列がaria-label属性に設定される", async () => {
      document.body.innerHTML = "<ub-icon text='Hello, World!'></ub-icon>";

      const icon = getIcon();

      expect(icon.getAttribute("aria-label")).toBe("Hello, World!");
    });

    test("text属性を設定しない場合、aria-label属性は設定されない", async () => {
      document.body.innerHTML = "<ub-icon></ub-icon>";

      const icon = getIcon();

      expect(icon.getAttribute("aria-label")).toBeNull();
    });

    test("text属性を更新すると、更新後の値がaria-label属性に設定される", async () => {
      document.body.innerHTML = "<ub-icon text='Hello, World!'></ub-icon>";

      const ubIcon = getUbIcon();
      const icon = getIcon();

      ubIcon.setAttribute("text", "Hello, Universe!");

      expect(icon.getAttribute("aria-label")).toBe("Hello, Universe!");
    });
  });

  describe("size", () => {
    test.each([
      ["small", "size__small"],
      ["medium", "size__medium"],
    ])(
      "size属性に%sを設定すると、クラスに%sが設定される",
      async (size, expected) => {
        document.body.innerHTML = `<ub-icon size="${size}"></ub-icon>`;

        const icon = getIcon();

        expect(icon.classList.contains(expected)).toBe(true);
      },
    );

    test("size属性を設定しない場合、クラスにデフォルト値のsize__mediumが設定される", async () => {
      document.body.innerHTML = "<ub-icon></ub-icon>";

      const icon = getIcon();

      expect(icon.classList.contains("size__medium")).toBe(true);
    });

    test("size属性を更新すると、クラスから古い値が削除され、新しい値が設定される", async () => {
      document.body.innerHTML = "<ub-icon size='small'></ub-icon>";

      const ubIcon = getUbIcon();
      const icon = getIcon();

      ubIcon.setAttribute("size", "medium");

      expect(icon.classList.contains("size__small")).toBe(false);
      expect(icon.classList.contains("size__medium")).toBe(true);
    });

    test("無効なsize属性を設定すると、クラスにデフォルト値のsize_mediumが設定される", async () => {
      document.body.innerHTML = "<ub-icon size='invalid'></ub-icon>";

      const icon = getIcon();

      expect(icon.classList.contains("size__medium")).toBe(true);
    });
  });
});
