import "../../src/components/radio/ub-radio-button-text";
import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";

const meta: Meta = {
  component: "ub-radio-button-text",
  argTypes: {
    text: { type: "string" },
    value: { type: "string" },
    name: { type: "string" },
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
    onchange: {
      action: "onchange",
    },
    // onclick: {
    //   action: "onclick",
    // },
  },
  args: {
    text: "ub-radio-button-text-text",
    value: "ub-radio-button-text-value",
    name: "ub-radio-button-text-name",
    checked: false,
    disabled: false,
    onchange: action("onchange"),
    // onclick: action("onclick"),
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {};

export const Form: Story = {
  decorators: [
    (story) => html`
      <label>
        <input
                type="radio"
                name="ub-radio-button-text-name"
                value="primitive4"
        />
        primitive4
      </label>
      <input
              type="radio"
              name="ub-radio-button-text-name"
              value="primitive5"
      />
      primitive5
      </label>
      <ub-radio-button-text
              text="helper4"
              name="ub-radio-button-text-name"
              value="helper4"
      >
      </ub-radio-button-text>
      <ub-radio-button-text
              text="helper5"
              name="ub-radio-button-text-name"
              value="helper5"
      >
      </ub-radio-button-text>
      <form>
        <p>form1</p>
        <label>
          <input
                  type="radio"
                  name="ub-radio-button-text-name"
                  value="primitive3"
          />
          primitive3
        </label>
        <ub-radio-button-text
                text="helper3"
                name="ub-radio-button-text-name"
                value="helper3"
        >
        </ub-radio-button-text>
        <input type="submit" />
      </form>
      <form>
        <p>form2</p>
        <fieldset role="radiogroup">
          <label>
            <input
                    type="radio"
                    name="ub-radio-button-text-name"
                    value="primitive6"
            />
            primitive6
          </label>
        </fieldset>
        <fieldset role="radiogroup">
          <legend>radio button test</legend>
          <label>
            <input
              type="radio"
              name="ub-radio-button-text-name"
              value="primitive1"
            />
            primitive1
          </label>
          <label>
            <input
              type="radio"
              name="ub-radio-button-text-name"
              value="primitive2"
            />
            primitive2
          </label>
          ${story()} ${story()}
          <ub-radio-button-text
            text="helper1"
            name="ub-radio-button-text-name"
            value="helper1"
            checked
            ><span>helper1</span></ub-radio-button-text
          >
          <ub-radio-button-text
            text="helper2"
            name="ub-radio-button-text-name"
            value="helper2"
          >
            <span>helper2</span>
          </ub-radio-button-text>
        </fieldset>
        <input type="reset" />
        <input type="submit" />
      </form>
    `,
  ],
};

export const Test: Story = {
  decorators: [
    (story) => html`
      <form>
        <div role="radiogroup" aria-labelledby="legend25" id="radiogroup25">
          <p id="legend25">Ipsum and lorem?</p>
          <div>
            <span
              role="radio"
              aria-checked="false"
              tabindex="0"
              aria-labelledby="q25_radio1-label"
              data-value="True"
            ></span>
            <label id="q25_radio1-label">True</label>
          </div>
          <div>
            <span
              role="radio"
              aria-checked="false"
              tabindex="0"
              aria-labelledby="q25_radio2-label"
              data-value="False"
            ></span>
            <label id="q25_radio2-label">False</label>
          </div>
          <div>
            <span
              role="radio"
              aria-checked="true"
              tabindex="0"
              aria-labelledby="q25_radio3-label"
              data-value="huh?"
            ></span>
            <label id="q25_radio3-label">What is the question?</label>
          </div>
        </div>
        <input type="submit" />
      </form>
    `,
  ],
};
