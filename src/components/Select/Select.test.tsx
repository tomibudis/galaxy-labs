import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Select from './Select';

afterEach(() => {
  cleanup();
  mockOnClick.mockClear();
});

const mockOnClick = jest.fn();

const SelectComponent = (props): JSX.Element => {
  return <Select {...props} name="select-test" />;
};

describe('<Select />', () => {
  it('render component', () => {
    const { container } = render(<SelectComponent />);
    expect(container.querySelector('input[name="select-test"]')).toBeTruthy();
  });

  it('matched with snapshot file', () => {
    const { baseElement } = render(<SelectComponent />);
    expect(baseElement).toMatchSnapshot();
  });
});
