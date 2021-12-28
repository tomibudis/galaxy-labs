import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Label from './Label';

afterEach(() => {
  cleanup();
});

const LabelComponent = (props): JSX.Element => {
  return <Label {...props}>{props.children}</Label>;
};

describe('<Label />', () => {
  it('render component without crashing', () => {
    render(<LabelComponent />);
    expect(true).toBeTruthy();
  });
  it('match with snapshot file', () => {
    const { baseElement } = render(
      <LabelComponent className="text-warning">Label</LabelComponent>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
