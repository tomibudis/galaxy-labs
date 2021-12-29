import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { AvatarProps } from '../../interface/index';
import Avatar from './Avatar';

afterEach(() => {
  cleanup();
});

const AvatarComponent: React.FC<AvatarProps> = (props): JSX.Element => {
  return <Avatar {...props} />;
};

describe('<Avatar />', () => {
  it('render component without crashing', () => {
    render(<AvatarComponent type="circle" />);
    expect(true).toBeTruthy();
  });

  it('render type rectangle avatar correctly', () => {
    const { container } = render(<AvatarComponent type="rectangle" />);
    expect(container.firstChild).toHaveClass('avatarRectangle');
  });

  it('render type circle avatar correctly', () => {
    const { container } = render(<AvatarComponent type="circle" />);
    expect(container.firstChild).toHaveClass('avatarCircle');
  });

  it('match with snapshot file', () => {
    const { baseElement } = render(
      <AvatarComponent type="circle" name="Tomi Budi" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
