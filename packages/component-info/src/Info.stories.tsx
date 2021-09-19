import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Info,
  InfoProps,
  InfoHead,
  InfoBody,
  InfoEyebrow,
} from "@mui-treasury/component-info";

export default {
  title: "Component/Info",
  component: Info,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Basic: Story<InfoProps> = (args) => {
  return (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoHead>Unveiling Material You</InfoHead>
      <InfoBody>The next stage for Material Design</InfoBody>
    </Info>
  );
};

declare module "./Info" {
  interface InfoPropsVariantOverrides {
    awesome: true;
  }
}

export const ThemeOverrides: Story<InfoProps> = (args) => {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          JunInfo: {
            variants: [
              {
                props: { variant: "awesome" },
                style: {
                  backgroundColor: "#f5f5f5",
                  "& .JunInfo-head": {
                    color: "red",
                  },
                },
              },
            ],
            styleOverrides: {
              root: {
                "& + .JunInfo-root": {
                  marginTop: "20px",
                },
              },
              head: { letterSpacing: "1px", color: "rgba(0,0,0,0.6)" },
            },
          },
        },
      })}
    >
      <Info>
        <InfoEyebrow>Theme overrides</InfoEyebrow>
        <InfoHead>Unveiling Material You</InfoHead>
        <InfoBody>The next stage for Material Design</InfoBody>
      </Info>
      <Info variant="awesome">
        <InfoEyebrow>Theme variants</InfoEyebrow>
        <InfoHead>Unveiling Material You</InfoHead>
        <InfoBody>The next stage for Material Design</InfoBody>
      </Info>
    </ThemeProvider>
  );
};