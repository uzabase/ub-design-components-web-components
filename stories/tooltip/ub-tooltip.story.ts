import type { Meta, StoryObj } from "@storybook/web-components";
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
    size: {
      control: { type: "select" },
      options: ["auto", "width240", "width320", "width400"],
    },
    zindex: {
      control: "text",
    },
  },
  args: {
    label: "label",
    placement: "top",
    size: "auto",
    zindex: "10",
  },
  render: (args) => html`
    <ub-tooltip
      label="${args.label}"
      placement="${args.placement}"
      size="${args.size}"
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
