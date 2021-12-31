import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.variant}</Button>;
};

export const TypeButton = Template.bind({});
TypeButton.args = {
  variant: 'primary',
  isLoading: false,
};
