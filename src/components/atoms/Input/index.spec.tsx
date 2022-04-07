import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input component', () => {
  test('render input component', () => {
    render(<Input placeholder="my placeholder" />);

    expect(screen.queryByPlaceholderText(/my placeholder/i))
      .toBeInTheDocument();
  });

  test('should put a value and check consistency', () => {
    render(<Input placeholder="my placeholder" value="potato" />);

    expect(screen.getByPlaceholderText(/my placeholder/i))
      .toHaveValue('potato');
  });
});
