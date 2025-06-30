import "../../src/components/checkbox/ub-checkbox-text";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { action } from "storybook/actions";

import { UbCheckboxText } from "../../src";

customElements.define("ub-checkbox-text", UbCheckboxText);

const meta = {
  component: "ub-checkbox-text",
  argTypes: {
    slot: { control: "text" },
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
    slot: "ub-checkbox-text-label",
    value: "ub-checkbox-text-value",
    name: "ub-checkbox-text-name",
    checked: false,
    indeterminate: false,
    disabled: false,
    onchange: action("onchange"),
  },
  render: (args) => html`
    <ub-checkbox-text
      value="${args.value}"
      name="${args.name}"
      ?checked="${args.checked}"
      ?indeterminate="${args.indeterminate}"
      ?disabled="${args.disabled}"
      @change="${args.onchange}"
    >
      ${args.slot}
    </ub-checkbox-text>
  `,
} satisfies Meta<UbCheckboxText>;

export default meta;
type Story = StoryObj<UbCheckboxText>;

export const Basic: Story = {
  tags: ["!dev-only"],
};

export const Form: Story = {
  decorators: [
    (story) => html`
      <form>
        <input
          type="checkbox"
          name="ub-checkbox-text-name"
          value="primitive1"
          onchange="console.log('onchange fire')"
        />
        <input
          type="checkbox"
          name="ub-checkbox-text-name"
          value="primitive2"
        />
        ${story()}
        <input type="reset" />
        <input type="submit" />
      </form>
    `,
  ],
};
