import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { UbButton } from "../../src/components/button/ub-button";

customElements.define("ub-button", UbButton);

const meta = {
  component: "ub-button",
  argTypes: {
    slot: {
      control: "text",
    },
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
    slot: "ub-button",
    type: "default",
    appearance: "fill",
    size: "medium",
    loading: false,
    selected: false,
    disabled: false,
    onclick: action("onclick"),
  },
  render: (args) => html`
    <ub-button
      type="${args.type}"
      appearance="${args.appearance}"
      size="${args.size}"
      ?loading="${args.loading}"
      ?selected="${args.selected}"
      ?disabled="${args.disabled}"
      @click="${args.onclick}"
    >
      ${args.slot}
    </ub-button>
  `,
} satisfies Meta<UbButton>;

export default meta;
type Story = StoryObj<UbButton>;

export const Basic: Story = {
  tags: ["!dev-only"],
};
