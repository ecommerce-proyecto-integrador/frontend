import { render, screen } from '@testing-library/react';
import PopularProducts from '../components/landing/PopularProducts';
import { PopularProductsList } from '../data/PopularProductsList';

describe('PopularProducts', () => {
  it('renders the correct number of ProductCard components', () => {
    render(<PopularProducts />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(PopularProductsList.length);
  });

  it('passes the correct props to each ProductCard component', () => {
    render(<PopularProducts />);
    const productCards = screen.getAllByTestId('product-card');
    productCards.forEach((productCard, index) => {
      expect(productCard).toHaveAttribute('name', PopularProductsList[index].name);
      expect(productCard).toHaveAttribute('description', PopularProductsList[index].description);
      expect(productCard).toHaveAttribute('category', PopularProductsList[index].category);
      expect(productCard).toHaveAttribute('brand', PopularProductsList[index].brand);
      expect(productCard).toHaveAttribute('size', PopularProductsList[index].size);
      expect(productCard).toHaveAttribute('image', PopularProductsList[index].selectedImg.image);
      expect(productCard).toHaveAttribute('price', PopularProductsList[index].price.toString());
    });
  });
});