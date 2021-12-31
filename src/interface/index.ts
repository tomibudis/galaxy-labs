import React from 'react';

import * as moment from 'moment';
import { Options } from 'react-select';

type SizeTypes = 'sm' | 'md' | 'lg';

type VariantTypes = 'primary' | 'secondary' | 'warning' | 'danger';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

type Option = {
  label: string;
  value: string;
};

export interface ButtonProps {
  isLoading?: boolean;
  variant?: VariantTypes;
  size?: SizeTypes;
  children: React.ReactNode;
}

export interface HeadingProps {
  level?: Level;
  className?: string;
  children: React.ReactNode | string;
  [x: string]: unknown;
}

export interface IconProps {
  name: string;
  className?: string;
  size?: SizeTypes;
}

export interface SelectProps {
  name: string;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  className?: string;
  classNamePrefix?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  options: Options<Option>;
}

export interface ModalProps {
  isVisible: boolean | undefined;
  onClose: () => void;
  size: SizeTypes;
  className: string;
}

export interface TextProps {
  className?: string;
  children: React.ReactNode;
}

export interface LabelProps {
  className?: string;
  children: React.ReactNode;
  id?: string | undefined;
  htmlFor?: string | undefined;
  isRequired?: boolean | undefined;
}

export interface CalendarProps {
  date?: moment.Moment | null | undefined;
  noBorder?: boolean | undefined;
  hideKeyboardShortcutsPanel?: boolean | undefined;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDateChange?: (selectedDate: moment.Moment) => moment.Moment;
  onOutsideClick?: () => React.MouseEvent<HTMLElement>;
  onPrevMonthClick?: () => moment.Moment;
  onNextMonthClick?: () => moment.Moment;
  locale?: string;
}

export interface AvatarProps {
  size?: SizeTypes;
  name?: string;
  icon?: string;
  type: 'rectangle' | 'circle' | undefined;
  className?: string;
  img?: string;
}
