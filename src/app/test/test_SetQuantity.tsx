import { render, screen, fireEvent } from '@testing-library/react';
import SetQuantity from '../components/product/SetQuantity';

describe('SetQuantity', () => {
  const cartProduct = {
    id: '1',
    name: 'Product 1',
    description: 'Product 1 description',
    category: 'Category 1',
    brand: 'Brand 1',
    size: 'S',
    selectedImg: { image: 'image1.jpg' },
    quantity: 1,
    price: 10,
  };

  const handleQuantityDecrease = jest.fn();
  const handleQuantityIncrease = jest.fn();

  it('renders quantity buttons', () => {
    render(
      <SetQuantity
        cartCounter={false}
        cartProduct={cartProduct}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
    );
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('renders quantity value', () => {
    render(
      <SetQuantity
        cartCounter={false}
        cartProduct={cartProduct}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls handleQuantityDecrease when "-" button is clicked', () => {
    render(
      <SetQuantity
        cartCounter={false}
        cartProduct={cartProduct}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    expect(handleQuantityDecrease).toHaveBeenCalled();
  });

  it('calls handleQuantityIncrease when "+" button is clicked', () => {
    render(
      <SetQuantity
        cartCounter={false}
        cartProduct={cartProduct}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    expect(handleQuantityIncrease).toHaveBeenCalled();
  });

  it('does not render quantity label when cartCounter is true', () => {
    render(
      <SetQuantity
        cartCounter={true}
        cartProduct={cartProduct}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
    );
    expect(screen.queryByText('QUANTITY')).not.toBeInTheDocument();
  });

  it('renders quantity label when cartCounter is false', () => {
    render(
      <SetQuantity
        cartCounter={false}
        cartProduct={cartProduct}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
    );
    expect(screen.getByText('QUANTITY')).toBeInTheDocument();
  });
});