import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { action } from "storybook/actions";

import { UbRadioButtonTextGroup } from "../../src/components/radio/ub-radio-button-text-group";

customElements.define("ub-radio-button-text-group", UbRadioButtonTextGroup);

const data = [
  {
    text: "text1",
    value: "value1",
    checked: false,
    disabled: false,
  },
  {
    text: "text2",
    checked: true,
  },
  {
    text: "text3",
    value: "value3",
    checked: false,
    disabled: true,
  },
];

const meta = {
  component: "ub-radio-button-text-group",
  argTypes: {
    name: { type: "string" },
    direction: { type: "string" },
    data: { type: "string" },
    onchange: {
      action: "onchange",
    },
  },
  args: {
    name: "ub-radio-button-text-group-name",
    direction: "horizontal",
    data: data,
    onchange: action("onchange"),
  },
} satisfies Meta<UbRadioButtonTextGroup>;

export default meta;
type Story = StoryObj<UbRadioButtonTextGroup>;

export const Basic: Story = {
  tags: ["!dev-only"],
};

export const Attribute: Story = {
  args: {
    direction: undefined,
    data: undefined,
  },
  render: (args) =>
    html` <ub-radio-button-text-group
      json-data=${JSON.stringify(data)}
      name=${args.name}
    ></ub-radio-button-text-group>`,
};

export const Form: Story = {
  decorators: [
    (story) => html`
      <form>
        <input
          type="checkbox"
          name="ub-radio-button-text-group-name"
          value="primitive1"
          onchange="console.log('onchange fire')"
        />
        <input
          type="checkbox"
          name="ub-radio-button-text-group-name"
          value="primitive2"
        />
        ${story()}
        <input type="reset" />
        <input type="submit" />
      </form>
    `,
  ],
};
