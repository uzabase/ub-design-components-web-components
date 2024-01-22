import "../../src/components/button/ub-button";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  component: "ub-button",
  argTypes: {
    text: { type: "string" },
    type: {
      control: { type: "select" },
      options: ["default", "destructive"],
    },
    appearance: {
      control: { type: "select" },
      options: ["outline", "fill", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["medium", "large", "xLarge", "width160", "width80"],
    },
    disabled: { type: "boolean" },
  },
  args: {
    text: "ub-button",
    type: "default",
    appearance: "fill",
    size: "medium",
    disabled: false,
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};
