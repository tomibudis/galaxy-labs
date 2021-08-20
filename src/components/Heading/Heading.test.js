import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Heading, { TESTID } from './Heading';

afterEach(() => {
  cleanup();
});

const HeadingComponent = (props) => {
  return <Heading {...props}>{props?.children || 'Hello Heading..'}</Heading>;
};

describe('<Button />', () => {
  it('render component', () => {
    const { getByTestId } = render(<HeadingComponent />);
    expect(getByTestId(TESTID)).toBeTruthy();
  });

  it('render children', () => {
    const expectedHTML = 'hello world';
    const { getByTestId } = render(
      <HeadingComponent>{expectedHTML}</HeadingComponent>
    );
    expect(getByTestId(TESTID)).toContainHTML(expectedHTML);
  });

  test.each([
    [1, 'h1'],
    [2, 'h2'],
    [3, 'h3'],
    [4, 'h4'],
    [5, 'h5'],
    [6, 'h6'],
  ])('render size level %s of heading', (level, expected) => {
    const { baseElement } = render(<HeadingComponent level={level} />);
    expect(baseElement.querySelector(expected)).toBeTruthy();
  });

  it('matched with snapshot file', () => {
    const { baseElement } = render(<HeadingComponent />);
    expect(baseElement).toMatchSnapshot();
  });
});
