import "../../src/components/checkbox/ub-checkbox";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  component: "ub-checkbox",
  argTypes: {
    value: { type: "string" },
    name: { type: "string" },
    checked: { type: "boolean" },
    indeterminate: { type: "boolean" },
    disabled: { type: "boolean" },
  },
  args: {
    value: "ub-checkbox-value",
    name: "ub-checkbox-name",
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};
