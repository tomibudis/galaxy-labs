import React from 'react';
import PropTypes from 'prop-types';

export const TESTID = 'heading-testid';

const Heading = ({ level, className, children, ...restProps }) => {
  return React.createElement(
    `h${level}`,
    { className, 'data-testid': TESTID, ...restProps },
    children
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  level: 4,
};

export default Heading;
