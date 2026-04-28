import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { describe, it, expect } from 'vitest';
import LanguageSwitcher from './lang-switcher';

i18n.init({
  resources: {
    en: { translation: {} },
    ru: { translation: {} },
  },
  lng: 'ru',
});

const renderWithI18n = (component: React.ReactElement) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};

describe('LanguageSwitcher', () => {
  it('renders RU button', () => {
    renderWithI18n(<LanguageSwitcher />);
    expect(screen.getByRole('button', { name: /ru/i })).toBeInTheDocument();
  });

  it('renders EN button', () => {
    renderWithI18n(<LanguageSwitcher />);
    expect(screen.getByRole('button', { name: /en/i })).toBeInTheDocument();
  });

  it('changes language to ru when RU button is clicked', async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);
    await user.click(screen.getByRole('button', { name: /ru/i }));
    expect(i18n.language).toBe('ru');
  });

  it('changes language to en when EN button is clicked', async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);
    await user.click(screen.getByRole('button', { name: /en/i }));
    expect(i18n.language).toBe('en');
  });
});
