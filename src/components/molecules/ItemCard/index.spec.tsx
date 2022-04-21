import { render, screen } from '@testing-library/react';
import { ItemCard } from '.';

test('should render card with right informations', () => {
  render(<ItemCard
    tool={{
      id: '1234',
      name: 'Github',
      description: 'A good platform to put your application codebase',
      link: 'https://github.com',
      tags: ['#git', '#platform'],
    }}
  />);

  expect(screen.getByText(/github/i)).toBeInTheDocument();
  expect(screen.getByText(/a good platform/i)).toBeInTheDocument();
  expect(screen.getByText(/#git/i)).toBeInTheDocument();
  expect(screen.getByText(/#platform/i)).toBeInTheDocument();
});
