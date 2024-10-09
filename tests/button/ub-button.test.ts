import { describe, expect, it } from "vitest";

import { UbButton } from "../../src/components/button/ub-button";

customElements.define("ub-button", UbButton);

function getUbButton() {
  return document.querySelector("ub-button") as UbButton;
}

describe("ub-button", () => {
  it("text属性を設定すると、その文字列が表示される", async () => {
    document.body.innerHTML = "<ub-button text='Hello, World!'></ub-button>";

    const ubButton = getUbButton();
    const span = ubButton.shadowRoot!.querySelector("span")!;

    expect(span.textContent).toBe("Hello, World!");
  });
});
