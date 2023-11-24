import React from "react";
import type { Preview } from "@storybook/react";
import { Box } from "@mui/material";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box minWidth={900}>
        <Story />
      </Box>
    ),
  ],
};

export default preview;
