import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "atoms/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Hello World</Text>
);

export const Paragraph = Template.bind({});
