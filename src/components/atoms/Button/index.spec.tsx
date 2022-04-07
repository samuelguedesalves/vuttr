import { render, screen } from '@testing-library/react';
import { Button } from '.';

test('should render button with right text', () => {
  render(<Button textButton="Hello world!" />);

  expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
});
