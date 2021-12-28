import React from 'react';

import moment from 'moment';
import { Meta, ComponentStory } from '@storybook/react';

import Calendar from './Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as Meta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args): JSX.Element => {
  return <Calendar {...args} />;
};

export const BasicCalendar = Template.bind({});
BasicCalendar.args = {
  date: moment(new Date(2021, 11, 29)),
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  date: moment(),
  noBorder: false,
};
