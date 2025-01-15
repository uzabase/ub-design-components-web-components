import type { Meta, StoryObj } from "@storybook/web-components";

import { UbIcon } from "../../src/components/icon/ub-icon";

customElements.define("ub-icon", UbIcon);

const meta = {
  component: "ub-icon",
  render: (params) => {
    const el = document.createElement("ub-icon");
    el.paths = {
      edit: '<path d="M16.93 3.5H15.52L3.52 15.5V20.5H8.47L10.47 18.5L9.36 17.44L7.81 18.99H4.98V16.16L12.98 8.16L15.82 10.99L10.47 16.38L11.47 17.44L20.47 8.44V7.04L16.93 3.5ZM16.85 9.95L14.01 7.13L16.22 4.91L19.06 7.74L16.85 9.95Z"/>',
    };
    el.text = params.text ?? "ub-icon-text";
    el.type = params.type ?? "edit";
    el.size = params.size ?? "medium";
    return el;
  },
  argTypes: {
    text: { type: "string" },
    type: {
      control: { type: "select" },
      options: ["edit"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
  args: {
    text: "ub-icon-text",
    type: "edit",
    size: "medium",
  },
} satisfies Meta<UbIcon>;

export default meta;
type Story = StoryObj<UbIcon>;

export const Basic: Story = {
  tags: ["!dev-only"],
};
