import { render, screen } from '@testing-library/react';
import RatingList from '../components/product/RatingList';

describe('RatingList', () => {
  const product = {
    id: '1',
    name: 'Product 1',
    price: 10,
    images: [{ image: 'image1.jpg' }],
    reviews: [{ rating: 4 }, { rating: 5 }],
    description: 'Product 1 description',
    category: 'Category 1',
    brand: 'Brand 1',
    sizeAvailable: ['S', 'M', 'L'],
    inStock: true,
  };

  it('renders the correct number of stars', () => {
    render(<RatingList product={product} />);
    expect(screen.getAllByRole('img')).toHaveLength(5);
  });

  it('renders the correct average rating', () => {
    render(<RatingList product={product} />);
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders the correct number of reviews', () => {
    render(<RatingList product={product} />);
    expect(screen.getByText('2 reviews')).toBeInTheDocument();
  });
});