import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "atoms/Heading",
  component: Heading,
  argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading color="text-bits-blue-5" {...args}>Hello World</Heading>
);

export const Headings = Template.bind({});
