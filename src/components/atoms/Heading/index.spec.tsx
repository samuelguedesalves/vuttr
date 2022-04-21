import { render, screen } from '@testing-library/react';
import { Heading } from '.';

test('should render heading', () => {
  render(<Heading>Hello world!</Heading>);

  expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
});
