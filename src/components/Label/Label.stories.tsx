import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args): JSX.Element => {
  return <Label {...args}>{args.children}</Label>;
};

export const BasicLabel = Template.bind({});
BasicLabel.args = {
  children: 'Label Component',
};

export const ColorLabel = Template.bind({});
ColorLabel.args = {
  children: 'Label Color',
  className: 'text-warning',
};

export const WithAsterisk = Template.bind({});
WithAsterisk.args = {
  children: 'Label with asterisk',
  isRequired: true,
};
