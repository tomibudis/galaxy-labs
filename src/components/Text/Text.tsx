import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { TextProps } from '#interface/index';

const Text: React.FC<TextProps> = ({ className, children }): JSX.Element => {
  return <p className={cx('mb-0', className)}>{children}</p>;
};

Text.propTypes = {
  /** Additional classname to define color of text */
  className: PropTypes.string,
  /** Children ReactNode */
  children: PropTypes.node.isRequired,
};

export default Text;
