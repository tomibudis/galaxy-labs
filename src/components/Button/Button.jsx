import React, { memo } from 'react';
import styles from './styles.scss';

const Button = () => <button className={styles.own}>Button Components</button>;

export default memo(Button);
