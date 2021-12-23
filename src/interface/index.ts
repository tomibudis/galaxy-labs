import React from 'react';

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
