import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Button = ({ isLoading }) => (
  <button className={styles.own}>
    {isLoading ? 'loading..' : 'Button Components'}
  </button>
);

// Prop Table
Button.propTypes = {
  isLoading: PropTypes.bool,
};

export default memo(Button);
