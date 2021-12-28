import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argsTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args): JSX.Element => {
  return <Text {...args}>{args.children}</Text>;
};

export const BasicText = Template.bind({});
BasicText.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit purus nec sem pulvinar euismod. Proin sit amet lacus cursus, sagittis ante non, ultrices diam. Nunc vehicula lectus eu leo vestibulum aliquet. Vivamus sagittis sapien lorem, quis fringilla felis gravida a. Donec id nulla massa. Morbi et ante ullamcorper nulla tristique feugiat in eget lectus. Suspendisse in turpis eget massa ultricies malesuada vel quis ipsum. Aenean auctor, nibh tincidunt dapibus laoreet, eros velit iaculis diam, ut varius risus mauris eget ipsum',
};

export const ColorText = Template.bind({});
ColorText.args = {
  children: 'Hello here is a text component',
  className: 'text-danger',
};
