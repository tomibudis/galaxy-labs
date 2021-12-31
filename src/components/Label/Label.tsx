import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { LabelProps } from '#interface/index';
import styles from './styles.module.scss';

const Label: React.FC<LabelProps> = ({
  className,
  children,
  htmlFor,
  id,
  isRequired,
}): JSX.Element => {
  return (
    <label id={id} htmlFor={htmlFor} className={cx(styles.label, className)}>
      {children} {isRequired && <span className="text-danger">*</span>}
    </label>
  );
};

Label.propTypes = {
  /** Additional classname to define color of label */
  className: PropTypes.string,
  /** Children ReactNode */
  children: PropTypes.node.isRequired,
};

export default Label;
