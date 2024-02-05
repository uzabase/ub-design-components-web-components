import "../../src/components/checkbox/ub-checkbox-list";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";

const meta: Meta = {
  component: "ub-checkbox-list",
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
    text: "ub-checkbox-list-text",
    value: "ub-checkbox-list-value",
    name: "ub-checkbox-list-name",
    checked: false,
    indeterminate: false,
    disabled: false,
    onchange: action("onchange"),
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};

export const Form: Story = {
  decorators: [
    (story) => html`
      <form>
        <input type="checkbox" name="ub-checkbox-list-name" value="primitive" />
        ${story()}
        <input type="submit" />
      </form>
    `,
  ],
};
