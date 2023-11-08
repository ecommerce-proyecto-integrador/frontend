import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

describe('Footer', () => {
  it('renders the correct text', () => {
    render(<Footer />);
    expect(screen.getByText('MonoStore Team')).toBeInTheDocument();
    expect(screen.getByText('Carlos')).toBeInTheDocument();
    expect(screen.getByText('Diego')).toBeInTheDocument();
    expect(screen.getByText('Mati')).toBeInTheDocument();
    expect(screen.getByText('Bassano')).toBeInTheDocument();
    expect(screen.getByText('Customer Service')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Shipping Police')).toBeInTheDocument();
    expect(screen.getByText('Returns & Exchanges')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Discover enchanting paintings of monkeys.')).toBeInTheDocument();
    expect(screen.getByText('Embrace the magic of art that sparks imagination.')).toBeInTheDocument();
    expect(screen.getByText('Handpicked. Captivating. Yours.')).toBeInTheDocument();
    expect(screen.getByText('Explore our world of whimsical apparel.')).toBeInTheDocument();
    expect(screen.getByText(`© ${new Date().getFullYear()} Monostore. All rights reserverd.`)).toBeInTheDocument();
    expect(screen.getByText('Follow us')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Youtube' })).toBeInTheDocument();
  });
});