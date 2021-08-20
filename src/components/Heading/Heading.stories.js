import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  return <Heading {...args}>{args.children}</Heading>;
};

export const TyphographyHeading = Template.bind({});

TyphographyHeading.args = {
  children: 'Typhography h4',
};
