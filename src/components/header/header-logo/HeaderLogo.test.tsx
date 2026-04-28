import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HeaderLogo from './HeaderLogo';

i18n.init({
  resources: {
    en: { translation: { company_name: 'Expert' } },
    ru: { translation: { company_name: 'Эксперт' } },
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

describe('HeaderLogo', () => {
  it('renders logo text', () => {
    renderWithRouter(<HeaderLogo />);
    expect(screen.getByText(/expert/i)).toBeInTheDocument();
  });

  it('navigates to home on click', async () => {
    const user = userEvent.setup();
    renderWithRouter(<HeaderLogo />);
    await user.click(screen.getByText(/expert/i));
    expect(window.location.pathname).toBe('/');
  });
});
