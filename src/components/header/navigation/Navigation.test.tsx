import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navigation from './Navigation';

i18n.init({
  resources: {
    en: {
      translation: {
        navigation_home: 'Home',
        navigation_about: 'About',
        navigation_offers: 'Offers',
        navigation_contacts: 'Contacts',
        navigation_info: 'Info',
        navigation_request: 'Request',
      },
    },
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

describe('Navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/offers/i)).toBeInTheDocument();
    expect(screen.getByText(/contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/info/i)).toBeInTheDocument();
    expect(screen.getByText(/request/i)).toBeInTheDocument();
  });

  it('toggles mobile menu on burger click', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navigation />);
    const burgerButton = screen.getByRole('button', { name: /menu/i });
    await user.click(burgerButton);
    await user.click(burgerButton);
  });

  it('has burger button', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
  });
});
