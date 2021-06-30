import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZE } from '#constants';

import styles from './styles.module.scss';

const path = 'https://raw.githubusercontent.com/twbs/icons/main/icons/';
const format = '.svg';
export const ICON_TESTID = 'icon-testid';

const Icon = ({ name, className, size }) => {
  const source = useMemo(() => {
    return path + name + format;
  }, [name]);

  return (
    <img
      data-testid={ICON_TESTID}
      src={source}
      className={cx(className, {
        [styles.iconSm]: size === SIZE.SM,
        [styles.iconMd]: size === SIZE.MD,
        [styles.iconLg]: size === SIZE.LG,
      })}
    />
  );
};

Icon.propTypes = {
  /** Name of icon */
  name: PropTypes.string.isRequired,
  /** Additional classname */
  className: PropTypes.string,
  /** Size of icon */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Icon.defaultProps = {
  size: 'sm',
};

export default Icon;
