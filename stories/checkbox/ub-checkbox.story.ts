import { UbCheckbox } from "../../src/components/checkbox/ub-checkbox";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";

customElements.get("ub-checkbox") ||
  customElements.define("ub-checkbox", UbCheckbox);

const meta: Meta = {
  component: "ub-checkbox",
  argTypes: {
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
    value: "ub-checkbox-value",
    name: "ub-checkbox-name",
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
          name="ub-checkbox-name"
          value="primitive1"
          onchange="console.log('onchange fire')"
        />
        <input type="checkbox" name="ub-checkbox-name" value="primitive2" />
        ${story()}
        <input type="reset" />
        <input type="submit" />
      </form>
    `,
  ],
};
