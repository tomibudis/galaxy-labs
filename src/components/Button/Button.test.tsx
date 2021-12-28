import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';

import Button, { TESTID } from './Button';
const mockOnClick = jest.fn();

afterEach(() => {
  cleanup();
  mockOnClick.mockClear();
});

const ButtonComponent = (props): JSX.Element => {
  return <Button {...props}>{props?.children || 'Test Component'}</Button>;
};

describe('<Button />', () => {
  it('render component', () => {
    const { getByTestId } = render(<ButtonComponent />);
    expect(getByTestId(TESTID.BTN)).toBeTruthy();
  });

  it('triggered onClick', () => {
    const { getByTestId } = render(<ButtonComponent onClick={mockOnClick} />);
    act(() => {
      fireEvent.click(getByTestId(TESTID.BTN));
    });
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test.each([
    ['primary', '.btn-primary'],
    ['secondary', '.btn-secondary'],
    ['warning', '.btn-warning'],
    ['danger', '.btn-danger'],
  ])('render %s button', (theme, expected) => {
    const { baseElement } = render(<ButtonComponent variant={theme} />);
    expect(baseElement.querySelector(expected)).toBeTruthy();
  });

  test.each([
    ['sm', '.btn-sm'],
    ['md', '.btn-md'],
    ['lg', '.btn-lg'],
  ])('render size %s button', (size, expected) => {
    const { baseElement } = render(<ButtonComponent size={size} />);
    expect(baseElement.querySelector(expected)).toBeTruthy();
  });

  it('matched with snapshot file', () => {
    const { baseElement } = render(<ButtonComponent />);
    expect(baseElement).toMatchSnapshot();
  });
});
