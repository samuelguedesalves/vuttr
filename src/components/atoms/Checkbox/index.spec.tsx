import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from '.';

test('should render checkbox and check right label', () => {
  render(<Checkbox label="a simple label" />);

  const checkboxElement = screen.getByLabelText(/a simple label/i);

  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
});
