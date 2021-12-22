import React from 'react';

export interface ModalProps {
  isVisible: boolean | undefined;
  onClose: () => void;
}

type SizeTypes = 'sm' | 'md' | 'lg';

type VariantTypes = 'primary' | 'secondary' | 'warning' | 'danger';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

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
