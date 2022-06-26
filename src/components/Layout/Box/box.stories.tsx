import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "layout/Box",
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  const { children, className } = args;
  return <Box className={className}>{children}</Box>;
};

export const BaseBox = Template.bind({});
export const CreateCardWithBox = Template.bind({});

BaseBox.args = {
  children: "Base Box",
};

CreateCardWithBox.args = {
  className:
    "flex items-center justify-center p-2 border border-bits-blue rounded-md shadow-md w-1/3 h-80",
  children: "Using box to create a card component",
};
