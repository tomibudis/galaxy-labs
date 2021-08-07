import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';
import cx from 'classnames';

const Select = ({
  className,
  classNamePrefix,
  defaultValue,
  isDisabled,
  isLoading,
  isClearable,
  isSearchable,
  name,
  options,
  ...restProps
}) => {
  return (
    <Fragment>
      <RSelect
        className={cx('basic-single w-100', className)}
        classNamePrefix={cx('select', classNamePrefix)}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        options={options}
        styles={{
          indicatorSeparator: () => ({
            background: 'orange',
            display: 'none',
          }),
          menuPortal: (base) => ({ ...base, zIndex: 999, background: 'red' }),
          control: (base) => ({
            ...base,
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            borderColor: '#e2e5ec',
          }),
          menu: (provided, state) => ({
            ...provided,
            margin: 0,
          }),
          option: (styles, { isSelected }) => {
            const primaryColor = '#6f42c1';
            return {
              ...styles,
              marginTop: 0,
              backgroundColor: isSelected && primaryColor,
              ':active': {
                ...styles[':active'],
                color: 'white',
                backgroundColor: primaryColor,
              },
            };
          },
        }}
        menuPortalTarget={document.querySelector('body')}
        {...restProps}
      />
    </Fragment>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  defaultValue: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default Select;
