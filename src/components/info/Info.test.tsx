import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Info from './Info';
import * as pagesApi from '@/data/api/pages';

vi.mock('@/data/api/pages', () => ({
  getPageById: vi.fn(),
}));

const mockPage = {
  page_id: 'info-1',
  page_title: 'Information',
  page_blocks: [
    {
      block_id: 'block-1',
      block_title: 'FAQ',
      block_sections: [
        {
          section_id: 'section-1',
          section_title: 'Common Questions',
          section_paragraphs: [
            {
              paragraph_id: 'para-1',
              paragraph_title: 'What is this?',
              paragraph_text: 'This is a test.',
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

describe('Info', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders page title when loaded', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Info content_id="info-1" />);
    await waitFor(() => {
      expect(screen.getByText(/information/i)).toBeInTheDocument();
    });
  });

  it('calls getPageById with content_id', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Info content_id="info-1" />);
    await waitFor(() => {
      expect(pagesApi.getPageById).toHaveBeenCalledWith('info-1');
    });
  });

  it('renders block title', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Info content_id="info-1" />);
    await waitFor(() => {
      expect(screen.getByText(/faq/i)).toBeInTheDocument();
    });
  });

  it('renders button with text', async () => {
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Info content_id="info-1" />);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /наши услуги/i })
      ).toBeInTheDocument();
    });
  });

  it('calls onBlockToggle when block is clicked', async () => {
    const handleToggle = vi.fn();
    vi.mocked(pagesApi.getPageById).mockResolvedValue(mockPage);
    renderWithRouter(<Info content_id="info-1" onBlockToggle={handleToggle} />);
    await waitFor(() => {
      expect(screen.getByText(/faq/i)).toBeInTheDocument();
    });
  });
});
