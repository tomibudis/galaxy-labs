import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Icon, { ICON_TESTID } from './Icon';

afterEach(() => {
  cleanup();
});

const IconComponent = (props) => {
  return <Icon {...props} name="youtube" />;
};

describe('<Icon />', () => {
  it('render component', () => {
    const { getByTestId } = render(<IconComponent />);
    expect(getByTestId(ICON_TESTID)).toBeTruthy();
  });

  test.each([
    ['sm', '.iconSm'],
    ['md', '.iconMd'],
    ['lg', '.iconLg'],
  ])('render %s icon', (size, expected) => {
    const { baseElement } = render(<IconComponent size={size} />);
    expect(baseElement.querySelector(expected)).toBeTruthy();
  });

  it('add additional classname', () => {
    const { baseElement } = render(<IconComponent className="mx-auto" />);
    expect(baseElement.querySelector('.mx-auto')).toBeTruthy();
  });

  it('matched with snapshot file', () => {
    const { baseElement } = render(<IconComponent />);
    expect(baseElement).toMatchSnapshot();
  });
});
