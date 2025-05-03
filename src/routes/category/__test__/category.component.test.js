import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { CategoriesContext } from '../../../contexts/categories.context';
import Category from '../category.component';

const mockCategoriesMap = {
  'oil-painting': [
    { id: 1, name: 'road-side', price: 1000 },
    { id: 2, name: 'birds', price: 1800 }
  ],
  Sketches: [
    { id: 3, name: 'sketch', price: 1500 }
  ]
};

const renderWithRouterAndContext = (category = 'oil-painting') => {
  const router = createMemoryRouter(
    [
      {
        path: '/shop/:category',
        element: <Category />,
      },
    ],
    {
      initialEntries: [`/shop/${category}`],
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true, 
      },
    }
  );

  return render(
    <CategoriesContext.Provider value={{ categoriesMap: mockCategoriesMap }}>
      <RouterProvider router={router} />
    </CategoriesContext.Provider>
  );
};

test('renders correct category title and product names', () => {
  renderWithRouterAndContext('oil-painting');
  expect(screen.getByText('OIL-PAINTING')).toBeInTheDocument();
  expect(screen.getByText(/road-side/i)).toBeInTheDocument();
  expect(screen.getByText(/birds/i)).toBeInTheDocument();
});

test('matches the snapshot for the category component', () => {
  const { asFragment } = renderWithRouterAndContext('oil-painting');
  expect(asFragment()).toMatchSnapshot();
});

