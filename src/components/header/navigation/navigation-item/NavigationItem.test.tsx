import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import NavigationItem from './NavigationItem';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NavigationItem', () => {
  it('renders nav link with text', () => {
    renderWithRouter(<NavigationItem route="/about" itemName="About" />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    renderWithRouter(<NavigationItem route="/contacts" itemName="Contacts" />);
    const link = screen.getByRole('link', { name: /contacts/i });
    expect(link).toHaveAttribute('href', '/contacts');
  });

  it('renders home link with end prop', () => {
    renderWithRouter(<NavigationItem route="/" itemName="Home" />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
});
