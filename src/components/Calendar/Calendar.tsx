import React, { useState, useCallback } from 'react';
import 'react-dates/initialize';

import moment from 'moment';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { DayPickerSingleDateController } from 'react-dates';

import { CalendarProps } from '#interface/index';
import Text from '../Text/Text';

const Calendar: React.FC<CalendarProps> = ({
  date: initialDate,
  onDateChange,
  onNextMonthClick,
  onPrevMonthClick,
  onOutsideClick,
  locale,
  noBorder,
  hideKeyboardShortcutsPanel,
}): JSX.Element => {
  const [date, setDate] = useState(moment(initialDate));

  moment.locale(locale);

  const handleDateChange = useCallback(
    (selectedDate: moment.Moment) => {
      setDate(selectedDate);
      return onDateChange ? onDateChange(selectedDate) : undefined;
    },
    [onDateChange, setDate]
  );

  if (!moment(initialDate).isValid()) {
    return <Text>The date unsupported! please check your date format</Text>;
  }
  return (
    <DayPickerSingleDateController
      onDateChange={handleDateChange}
      onOutsideClick={onOutsideClick}
      onPrevMonthClick={onNextMonthClick}
      onNextMonthClick={onPrevMonthClick}
      numberOfMonths={1}
      hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
      date={date}
      noBorder={noBorder}
      focused={true}
    />
  );
};

Calendar.propTypes = {
  /** Moment date object that represents the current selected date */
  date: momentPropTypes.momentObj,
  /** Hide border calendar */
  noBorder: PropTypes.bool,
  /** Handler fired when a date is selected */
  onDateChange: PropTypes.func,
  /** Triggered when click outside calendar */
  onOutsideClick: PropTypes.func,
  /** localization of calendar component */
  locale: PropTypes.string,
};

Calendar.defaultProps = {
  hideKeyboardShortcutsPanel: true,
  noBorder: true,
  locale: 'en',
};

export default Calendar;
