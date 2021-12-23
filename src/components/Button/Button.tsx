import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { THEME, SIZE } from '#constants/index';
import { ButtonProps } from '#interface/index';

export const TESTID = {
  BTN: 'btnTestID',
  LOADING: 'btnLoadingTestID',
};

const Button: React.FC<ButtonProps> = ({
  isLoading,
  variant,
  children,
  size,
  ...restProps
}): JSX.Element => {
  const getTheme: string = useMemo(() => {
    switch (variant) {
      case THEME.PRIMARY:
        return 'btn-primary';
      case THEME.SECONDARY:
        return 'btn-secondary';
      case THEME.WARNING:
        return 'btn-warning';
      case THEME.DANGER:
        return 'btn-danger text-white';
      default:
        return 'btn-primary';
    }
  }, [variant]);

  const getSize: string = useMemo(() => {
    switch (size) {
      case SIZE.SM:
        return 'btn-sm';
      case SIZE.MD:
        return 'btn-md';
      case SIZE.LG:
        return 'btn-lg';
      default:
        return 'btn-md';
    }
  }, [size]);

  return (
    <button
      type="button"
      disabled={isLoading}
      className={cx('btn', getTheme, getSize)}
      data-testid={TESTID.BTN}
      {...restProps}
    >
      {isLoading && (
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
          data-testid={TESTID.LOADING}
        />
      )}
      <span className="ml-3">{children}</span>
    </button>
  );
};

Button.propTypes = {
  /** Set loading button [true | false] */
  isLoading: PropTypes.bool,
  /** Set size of button */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Set variant of button [string] */
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger']),
  /** Children node */
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  isLoading: false,
};

export default Button;
