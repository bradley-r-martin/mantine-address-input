import { TextInput, TextInputProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface AddressInputProps extends Omit<TextInputProps, 'type'> {
  /** Placeholder text */
  placeholder?: string;
}

export const AddressInput = forwardRef<HTMLInputElement, AddressInputProps>(
  ({ placeholder = 'Enter address', ...props }, ref) => {
    return <TextInput ref={ref} type="text" placeholder={placeholder} {...props} />;
  }
);

AddressInput.displayName = 'AddressInput';
