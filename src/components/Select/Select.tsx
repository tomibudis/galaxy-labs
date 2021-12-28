import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';
import cx from 'classnames';

import { SelectProps } from '../../interface';

const Select: React.FC<SelectProps> = ({
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
}): JSX.Element => {
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
          menuPortal: (base): any => ({
            ...base,
            zIndex: 999,
            background: 'red',
          }),
          control: (base): any => ({
            ...base,
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            borderColor: '#e2e5ec',
          }),
          menu: (provided): any => ({
            ...provided,
            margin: 0,
          }),
          option: (styles, { isSelected }): any => {
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
  /** Key of field selecct */
  name: PropTypes.string.isRequired,
  /** Additional classname */
  className: PropTypes.string,
  /** Add classname under select component */
  classNamePrefix: PropTypes.string,
  /** Initial values */
  defaultValue: PropTypes.string,
  /** To set disabled field */
  isDisabled: PropTypes.bool,
  /** Show loading */
  isLoading: PropTypes.bool,
  /** Show x icon to clear field */
  isClearable: PropTypes.bool,
  /** Ability to search data option */
  isSearchable: PropTypes.bool,
  /** List data option for select component */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;
