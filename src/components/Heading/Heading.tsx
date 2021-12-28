import React from 'react';
import PropTypes from 'prop-types';

import { HeadingProps } from '#interface/index';

export const TESTID = 'heading-testid';

const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  children,
  ...restProps
}): JSX.Element => {
  return React.createElement(
    `h${level}`,
    { className, 'data-testid': TESTID, ...restProps },
    children
  );
};

Heading.propTypes = {
  /** Size of font heading */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Additional classname */
  className: PropTypes.string,
  /** React Node */
  children: PropTypes.node,
};

Heading.defaultProps = {
  level: 4,
};

export default Heading;
