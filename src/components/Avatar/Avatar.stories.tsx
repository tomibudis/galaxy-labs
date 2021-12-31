import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argsTypes: {
    control: { table: { disable: true } },
  },
} as Meta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args): JSX.Element => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'Tomi Budi',
  size: 'sm',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  name: 'John Doe',
  type: 'rectangle',
  icon: null,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'person',
  className: 'bg-warning',
};

export const WithImage = Template.bind({});
WithImage.args = {
  img: 'https://www.signivis.com/img/custom/avatars/member-avatar-01.png',
};

export const Size = (): JSX.Element => {
  return (
    <div className="d-flex gap-3">
      <Avatar size="sm" name="Small" />
      <Avatar size="md" name="Medium" />
      <Avatar size="lg" name="Large" />
    </div>
  );
};
