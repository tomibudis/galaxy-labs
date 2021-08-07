import React from 'react';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => (
  <div style={{ width: '200px' }}>
    <Select {...args} />
  </div>
);

export const SelectExample = Template.bind({});
SelectExample.args = {
  options: [
    { label: 'test 1', value: 'test1' },
    { label: 'test 2', value: 'test2' },
  ],
  isClearable: true,
};
