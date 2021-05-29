import React from 'react';
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
};

const Template = (args) => {
  return <Button {...args}>{args.theme}</Button>;
};

export const TypeButton = Template.bind({});
TypeButton.parameters = {
  controls: { exclude: ['isLoading'] },
};
TypeButton.args = {
  theme: 'primary',
};
