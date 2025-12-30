# mantine-address-input

A Mantine component extension for address input with autocomplete functionality.

## Installation

```bash
npm install mantine-address-input
# or
yarn add mantine-address-input
# or
pnpm add mantine-address-input
```

## Usage

```tsx
import { AddressInput } from 'mantine-address-input';
import '@mantine/core/styles.css';

function App() {
  return (
    <AddressInput
      label="Address"
      placeholder="Enter your address"
    />
  );
}
```

## Development

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build` - Build the library
- `npm run dev` - Build in watch mode
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. Write tests alongside your components:

```tsx
// AddressInput.test.tsx
import { render, screen } from '@testing-library/react';
import { AddressInput } from './AddressInput';

describe('AddressInput', () => {
  it('renders correctly', () => {
    render(<AddressInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

## Storybook

This project includes [Storybook](https://storybook.js.org/) for component development and documentation.

To start Storybook:

```bash
npm run storybook
```

To build Storybook:

```bash
npm run build-storybook
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Links

- [Storybook Documentation](https://bradley-r-martin.github.io/mantine-address-input/)
- [Mantine Documentation](https://mantine.dev/)
