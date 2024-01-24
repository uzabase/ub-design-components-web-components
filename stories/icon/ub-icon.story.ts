import "../../src/components/icon/ub-icon";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  component: "ub-icon",
  render: (params) => {
    const el = document.createElement("ub-icon");
    el.setAttribute("text", params.text ?? "ub-icon-text");
    el.setAttribute("type", params.type ?? "home");
    el.setAttribute("size", params.size ?? "medium");
    el.paths = {
      home: "M12.4515 1L1 8.66667L1.67932 9.63713L2.74684 8.86076V22.8354L3.91139 24H9.1519V17.4979H15.8481V24H20.9916L22.1561 22.8354V14.9747H20.9916V22.8354H17.0127V16.3333H7.98734V22.8354H3.91139V8.08439L12.4515 2.35865L20.9916 8.08439V12.0633H22.1561V8.86076L23.3207 9.63713L24 8.66667L12.4515 1Z",
    };
    return el;
  },
  argTypes: {
    text: { type: "string" },
    type: {
      control: { type: "select" },
      options: ["home"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
  args: {
    text: "ub-icon-text",
    type: "home",
    size: "medium",
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};
