import type { Meta, StoryObj } from '@storybook/react';
import { AddressInput } from './AddressInput';

const meta: Meta<typeof AddressInput> = {
  title: 'Components/AddressInput',
  component: AddressInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddressInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter address',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
  },
};

export const WithError: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
    error: 'Please enter a valid address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
    required: true,
  },
};
