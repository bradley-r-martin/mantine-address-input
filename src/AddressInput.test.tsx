import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddressInput } from './AddressInput';
import { MantineProvider } from '@mantine/core';

describe('AddressInput', () => {
  it('renders correctly', () => {
    render(
      <MantineProvider>
        <AddressInput />
      </MantineProvider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays placeholder text', () => {
    render(
      <MantineProvider>
        <AddressInput placeholder="Enter your address" />
      </MantineProvider>
    );
    expect(screen.getByPlaceholderText('Enter your address')).toBeInTheDocument();
  });
});
