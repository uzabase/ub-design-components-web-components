import "../../src/components/checkbox/ub-checkbox-text";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";
import { UbCheckboxText } from "../../src";

customElements.get("ub-checkbox-text") ||
  customElements.define("ub-checkbox-text", UbCheckboxText);

const meta: Meta = {
  component: "ub-checkbox-text",
  argTypes: {
    text: { type: "string" },
    value: { type: "string" },
    name: { type: "string" },
    checked: { type: "boolean" },
    indeterminate: { type: "boolean" },
    disabled: { type: "boolean" },
    onchange: {
      action: "onchange",
    },
  },
  args: {
    text: "ub-checkbox-text-text",
    value: "ub-checkbox-text-value",
    name: "ub-checkbox-text-name",
    checked: false,
    indeterminate: false,
    disabled: false,
    onchange: action("onchange"),
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};

export const Form: Story = {
  decorators: [
    (story) => html`
      <form>
        <input
          type="checkbox"
          name="ub-checkbox-text-name"
          value="primitive1"
          onchange="console.log('onchange fire')"
        />
        <input
          type="checkbox"
          name="ub-checkbox-text-name"
          value="primitive2"
        />
        ${story()}
        <input type="reset" />
        <input type="submit" />
      </form>
    `,
  ],
};
