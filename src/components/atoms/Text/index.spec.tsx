import { render, screen } from '@testing-library/react';
import { Text } from './index';

test('should render text component with a text', () => {
  render(<Text>Hello World</Text>);

  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
