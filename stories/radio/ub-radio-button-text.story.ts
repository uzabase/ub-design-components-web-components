import "../../src/components/radio/ub-radio-button-text";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  component: "ub-radio-button-text",
  argTypes: {
    text: { type: "string" },
    value: { type: "string" },
    name: { type: "string" },
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
    onchange: {
      action: "onchange",
    },
  },
  args: {
    text: "ub-radio-button-text-text",
    value: "ub-radio-button-text-value",
    name: "ub-radio-button-text-name",
    checked: false,
    disabled: false,
    onchange: action("onchange"),
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};
