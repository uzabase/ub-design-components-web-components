import "../../src/components/checkbox/ub-checkbox-text";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";

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