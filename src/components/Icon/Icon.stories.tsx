import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import Icon from '.';
import icons from '../../constants/icons.json';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const renderIcon = (name, size): JSX.Element => {
  return (
    <div
      className="d-flex flex-column justify-content-center m-2"
      style={{ width: '100px' }}
    >
      <Icon className="mx-auto" name={name} size={size} />
      <span className="text-center mt-2">{name}</span>
    </div>
  );
};

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <div
      style={{ width: '600px' }}
      className="d-flex flex-wrap justify-content-between align-items-start "
    >
      {icons.map((icon) => {
        return renderIcon(icon, args.size);
      })}
    </div>
  );
};

export const TypeIcon = Template.bind({});
TypeIcon.args = {
  size: 'lg',
};
