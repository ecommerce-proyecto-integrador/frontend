import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import ProductCard from '../components/product/ProductCard';
import '@testing-library/jest-dom'


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ProductCard', () => {
  const data = {
    id: '1',
    name: 'Product 1',
    price: 10,
    images: [{ image: 'image1.jpg' }],
    reviews: [{ rating: 4 }, { rating: 5 }],
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it('renders product name', () => {
    render(<ProductCard data={data} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('renders product image', () => {
    render(<ProductCard data={data} />);
    expect(screen.getByAltText('Product 1')).toBeInTheDocument();
  });

  it('renders product rating', () => {
    render(<ProductCard data={data} />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', '4.5 stars');
  });

  it('renders product reviews count', () => {
    render(<ProductCard data={data} />);
    expect(screen.getByText('2 reviews')).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<ProductCard data={data} />);
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('navigates to product page on click', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
    render(<ProductCard data={data} />);
    screen.getByRole('button').click();
    expect(push).toHaveBeenCalledWith('/pages/product/1?id=1');
  });
});