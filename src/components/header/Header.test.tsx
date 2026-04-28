import { render, screen } from '@testing-library/react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';

i18n.init({
  resources: {
    en: { translation: { company_name: 'Expert' } },
  },
  lng: 'en',
});

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders header element', () => {
    renderWithRouter(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders HeaderLogo component', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText(/expert/i)).toBeInTheDocument();
  });

  it('renders Navigation component', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
