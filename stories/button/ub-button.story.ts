import { UbButton } from "../../src/components/button/ub-button";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";

customElements.get("ub-button") || customElements.define("ub-button", UbButton);

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
    loading: { type: "boolean" },
    selected: { type: "boolean" },
    disabled: { type: "boolean" },
    onclick: {
      action: "onclick",
    },
  },
  args: {
    text: "ub-button",
    type: "default",
    appearance: "fill",
    size: "medium",
    loading: false,
    selected: false,
    disabled: false,
    onclick: action("onclick"),
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};

export const Attribute: Story = {
  decorators: [() => html` <ub-button text="text"></ub-button> `],
};
