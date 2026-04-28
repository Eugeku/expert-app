import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AboutMain from './AboutMain';
import * as pagesApi from '@/data/api/pages';

vi.mock('@/data/api/pages', () => ({
  getPageById: vi.fn(),
}));

const mockPage = {
  page_id: 'about-main-1',
  page_title: 'About Main',
  page_blocks: [
    {
      block_id: 'block-1',
      block_title: 'Introduction',
      block_sections: [
        {
          section_id: 'section-1',
          section_title: 'Who We Are',
          section_paragraphs: [
            {
              paragraph_id: 'para-1',
              paragraph_title: null,
              paragraph_text: 'We are experts...',
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

describe('AboutMain', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders page content when loaded', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<AboutMain content_id="about-main-1" />);
    await waitFor(() => {
      expect(screen.getByText(/about main/i)).toBeInTheDocument();
    });
  });

  it('calls getPageById with content_id', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<AboutMain content_id="about-main-1" />);
    await waitFor(() => {
      expect(pagesApi.getPageById).toHaveBeenCalledWith('about-main-1');
    });
  });

  it('renders button with Подробнее text', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<AboutMain content_id="about-main-1" />);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /подробнее/i })
      ).toBeInTheDocument();
    });
  });

  it('renders image with alt text', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<AboutMain content_id="about-main-1" />);
    await waitFor(() => {
      expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });
  });
});
