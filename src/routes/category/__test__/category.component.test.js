import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
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

// Utility to render the component with context and routing
const renderWithRouterAndContext = (category = 'oil-painting') => {
  render(
    <CategoriesContext.Provider value={{ categoriesMap: mockCategoriesMap }}>
      <MemoryRouter initialEntries={[`/shop/${category}`]}>
        <Routes>
          <Route path="/shop/:category" element={<Category />} />
        </Routes>
      </MemoryRouter>
    </CategoriesContext.Provider>
  );
};

test('renders correct category title and product names', () => {
  renderWithRouterAndContext('oil-painting');

  expect(screen.getByText('OIL-PAINTING')).toBeInTheDocument();

  expect(screen.getByText(/road-side/i)).toBeInTheDocument();
  expect(screen.getByText(/birds/i)).toBeInTheDocument();
});
