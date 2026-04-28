import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('Footer', () => {
  it('renders footer element', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByText(/витебский технический центр/i);
    expect(footer).toBeInTheDocument();
  });

  it('renders company name', () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByText(/витебский технический центр/i)
    ).toBeInTheDocument();
  });

  it('renders UNP number', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/391365905/i)).toBeInTheDocument();
  });

  it('renders phone link', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/8-0212-24-90-93/i)).toBeInTheDocument();
  });

  it('renders email link', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/vitteh@tut.by/i)).toBeInTheDocument();
  });

  it('renders address', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/г\. витебск/i)).toBeInTheDocument();
  });
});
