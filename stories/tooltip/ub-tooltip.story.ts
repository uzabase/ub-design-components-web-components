import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import { UbTooltip } from "../../src/components/tooltip/ub-tooltip";

customElements.define("ub-tooltip", UbTooltip);

const meta = {
  component: "ub-tooltip",
  argTypes: {
    label: {
      control: "text",
    },
    placement: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    zindex: {
      control: "text",
    },
  },
  args: {
    label: "label",
    placement: "top",
    zindex: "10",
  },
  render: (args) => html`
    <ub-tooltip
      label="${args.label}"
      placement="${args.placement}"
      zindex="${args.zindex}"
    >
      <button>Hover me</button>
    </ub-tooltip>
  `,
} satisfies Meta<UbTooltip>;

export default meta;
type Story = StoryObj<UbTooltip>;

export const Basic: Story = {
  tags: ["!dev-only"],
};
