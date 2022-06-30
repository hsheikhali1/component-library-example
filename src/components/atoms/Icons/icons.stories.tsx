import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const BasicIcons = Template.bind({});
export const ComplexIcons = Template.bind({});

ComplexIcons.args = {
  iconBgColor: "fill-bits-blue",
  iconColor: "text-bits-blue-1",
  name: "checkmark",
};
