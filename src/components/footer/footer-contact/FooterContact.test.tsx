import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import FooterContact, { LinkType } from './FooterContact';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('FooterContact', () => {
  it('renders image with alt text', () => {
    renderWithRouter(
      <FooterContact
        img="./icon.svg"
        img_alt="phone"
        text_lines={[{ value: 'Test', isInteractive: false }]}
      />
    );
    const img = screen.getByAltText(/phone/i);
    expect(img).toBeInTheDocument();
  });

  it('renders non-interactive text', () => {
    renderWithRouter(
      <FooterContact
        img="./icon.svg"
        img_alt="phone"
        text_lines={[{ value: 'Test text', isInteractive: false }]}
      />
    );
    expect(screen.getByText(/test text/i)).toBeInTheDocument();
  });

  it('renders interactive link with href', () => {
    renderWithRouter(
      <FooterContact
        img="./icon.svg"
        img_alt="email"
        text_lines={[{ value: 'test@example.com', isInteractive: true }]}
        link_type={LinkType.email}
      />
    );
    const link = screen.getByRole('link', { name: /test@example\.com/i });
    expect(link).toHaveAttribute('href', 'mailto:test@example.com');
  });

  it('renders phone link with tel protocol', () => {
    renderWithRouter(
      <FooterContact
        img="./icon.svg"
        img_alt="phone"
        text_lines={[{ value: '+123456789', isInteractive: true }]}
        link_type={LinkType.phone}
      />
    );
    const link = screen.getByRole('link', { name: /\+123456789/i });
    expect(link).toHaveAttribute('href', 'tel:+123456789');
  });

  it('renders multiple text lines', () => {
    renderWithRouter(
      <FooterContact
        img="./icon.svg"
        img_alt="phone"
        text_lines={[
          { value: 'Line 1', isInteractive: false },
          { value: 'Line 2', isInteractive: false },
        ]}
      />
    );
    expect(screen.getByText(/line 1/i)).toBeInTheDocument();
    expect(screen.getByText(/line 2/i)).toBeInTheDocument();
  });
});
