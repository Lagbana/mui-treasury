import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Box from "@mui/material/Box";
import {
  BirthdateField,
  BirthdateFieldProps,
} from "@mui-treasury/component-birthdatefield";

export default {
  title: "Component/BirthdateField",
  component: BirthdateField,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["outlined", "filled", "standard"],
      },
    },
  },
  args: {
    label: "Birthdate",
    helperText: "DD/MM/YYYY",
    variant: "outlined",
    fullWidth: false,
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Basic: Story<BirthdateFieldProps> = (args) => {
  return (
    <Box width={300}>
      <BirthdateField {...args} />
    </Box>
  );
};