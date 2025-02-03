import type { StorybookConfig } from "@storybook/web-components-vite";

const isProduction = process.env.NODE_ENV === "production";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.story.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  tags: {
    "dev-only": { excludeFromSidebar: isProduction },
  },
};
export default config;
