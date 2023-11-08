import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import ProductDinamic from '../pages/product/[ProductId]/page';
import { products } from '../../../utils/products';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

describe('ProductDinamic', () => {
  const mockSearchParams = {
    get: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it('renders product details', () => {
    const mockProduct = products[0];
    mockSearchParams.get.mockReturnValue(mockProduct.id);

    render(<ProductDinamic params={{}} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
  });

  it('renders rating list', () => {
    const mockProduct = products[0];
    mockSearchParams.get.mockReturnValue(mockProduct.id);

    render(<ProductDinamic params={{}} />);

    expect(screen.getByText('Add Rating')).toBeInTheDocument();
    expect(screen.getByText('Ratings:')).toBeInTheDocument();
  });

  it('does not render product details or rating list when product is not found', () => {
    mockSearchParams.get.mockReturnValue('invalid-id');

    render(<ProductDinamic params={{}} />);

    expect(screen.queryByText('Product Name')).not.toBeInTheDocument();
    expect(screen.queryByText('Product Description')).not.toBeInTheDocument();
    expect(screen.queryByText('$10')).not.toBeInTheDocument();
    expect(screen.queryByText('Add Rating')).not.toBeInTheDocument();
    expect(screen.queryByText('Ratings:')).not.toBeInTheDocument();
  });
});