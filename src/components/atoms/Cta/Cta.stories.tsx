import { ComponentStory, ComponentMeta } from "@storybook/react";
import Cta from ".";

export default {
  title: "atoms/Cta",
  component: Cta,
  argTypes: {
    variant: {
      options: ["solid", "outlined", "link"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Cta>;

const Template: ComponentStory<typeof Cta> = (args) => <Cta {...args} />;

export const Solid = Template.bind({});
export const Outlined = Template.bind({});
export const Link = Template.bind({});

Solid.args = {
  variant: "solid",
  label: "solid button",
  href: "#",
};

Outlined.args = {
  variant: "outlined",
  label: "outlined button",
  href: "#",
};

Link.args = {
  variant: "link",
  label: "link button",
  href: "#",
};
