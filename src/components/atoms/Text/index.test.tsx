import { render, screen } from '@testing-library/react';
import { Text } from './index';

test('renders text component', () => {
  render(<Text>Hello World</Text>);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
