import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import About from './About';
import * as pagesApi from '@/data/api/pages';

vi.mock('@/data/api/pages', () => ({
  getPageById: vi.fn(),
}));

const mockPage = {
  page_id: 'about-1',
  page_title: 'About Us',
  page_blocks: [
    {
      block_id: 'block-1',
      block_title: 'Our Story',
      block_sections: [
        {
          section_id: 'section-1',
          section_title: 'History',
          section_paragraphs: [
            {
              paragraph_id: 'para-1',
              paragraph_title: null,
              paragraph_text: 'We are a company...',
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

describe('About', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', () => {
    vi.mocked(pagesApi.getPageById).mockImplementation(
      () => new Promise(() => {})
    );
    renderWithRouter(<About content_id="about-1" />);
  });

  it('renders page content when loaded', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<About content_id="about-1" />);
    await waitFor(() => {
      expect(screen.getByText(/about us/i)).toBeInTheDocument();
    });
  });

  it('calls getPageById with content_id', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<About content_id="about-1" />);
    await waitFor(() => {
      expect(pagesApi.getPageById).toHaveBeenCalledWith('about-1');
    });
  });

  it('renders button with text', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<About content_id="about-1" />);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /наши услуги/i })
      ).toBeInTheDocument();
    });
  });
});
