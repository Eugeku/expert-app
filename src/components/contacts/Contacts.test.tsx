import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Contacts from './Contacts';
import * as pagesApi from '@/data/api/pages';

vi.mock('@/data/api/pages', () => ({
  getPageById: vi.fn(),
}));

const mockPage = {
  page_id: 'contacts-1',
  page_title: 'Contact Us',
  page_blocks: [
    {
      block_id: 'block-1',
      block_title: 'Info',
      block_sections: [
        {
          section_id: 'section-1',
          section_title: 'Details',
          section_paragraphs: [
            {
              paragraph_id: 'schedule',
              paragraph_title: 'Schedule',
              paragraph_text: 'Mon-Fri 9:00-18:00',
            },
            {
              paragraph_id: 'email',
              paragraph_title: 'Email',
              paragraph_text: 'test@example.com',
            },
            {
              paragraph_id: 'phone',
              paragraph_title: 'Phone',
              paragraph_text: '+123456789',
            },
            {
              paragraph_id: 'address',
              paragraph_title: 'Address',
              paragraph_text: '123 Main St',
            },
            {
              paragraph_id: 'map_section',
              paragraph_title: 'Map',
              paragraph_text: 'Map description',
            },
          ],
        },
      ],
    },
  ],
};

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Contacts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders page title when loaded', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    });
  });

  it('calls getPageById with content_id', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(pagesApi.getPageById).toHaveBeenCalledWith('contacts-1');
    });
  });

  it('renders schedule paragraph', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(screen.getByText(/mon-fri 9:00-18:00/i)).toBeInTheDocument();
    });
  });

  it('renders email paragraph', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
    });
  });

  it('renders phone paragraph', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(screen.getByText(/\+123456789/i)).toBeInTheDocument();
    });
  });

  it('renders address paragraph', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(screen.getByText(/123 main st/i)).toBeInTheDocument();
    });
  });

  it('renders button with text', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Contacts content_id="contacts-1" />);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /наши услуги/i })
      ).toBeInTheDocument();
    });
  });
});
