import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Text from './Text';

afterEach(() => {
  cleanup();
});

const TextComponent = (props): JSX.Element => {
  return <Text {...props}>{props?.children || 'Text Component'}</Text>;
};

describe('<Text />', () => {
  it('render component without crashing', () => {
    render(<TextComponent />);
    expect(true).toBeTruthy();
  });
  it('match with snapshot file', () => {
    const { baseElement } = render(
      <TextComponent className="text-danger">here a text</TextComponent>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
