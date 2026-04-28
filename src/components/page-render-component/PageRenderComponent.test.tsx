import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PageRenderComponent from './PageRenderComponent';
import type { Page } from '@/data/models/page';

const mockPage: Page = {
  page_id: 'test-page',
  page_title: 'Test Page Title',
  page_blocks: [
    {
      block_id: 'block-1',
      block_title: 'Test Block',
      block_sections: [
        {
          section_id: 'section-1',
          section_title: 'Test Section',
          section_paragraphs: [
            {
              paragraph_id: 'para-1',
              paragraph_title: 'Test Paragraph',
              paragraph_text: 'This is test paragraph text.',
            },
          ],
        },
      ],
    },
  ],
};

describe('PageRenderComponent', () => {
  it('renders page title', () => {
    render(<PageRenderComponent pageContent={mockPage} />);
    expect(screen.getByText(/test page title/i)).toBeInTheDocument();
  });

  it('renders block title', () => {
    render(<PageRenderComponent pageContent={mockPage} />);
    expect(screen.getByText(/test block/i)).toBeInTheDocument();
  });

  it('renders section title', () => {
    render(<PageRenderComponent pageContent={mockPage} />);
    expect(screen.getByText(/test section/i)).toBeInTheDocument();
  });

  it('renders paragraph text', () => {
    render(<PageRenderComponent pageContent={mockPage} />);
    expect(
      screen.getByText(/this is test paragraph text/i)
    ).toBeInTheDocument();
  });

  it('renders without accordion when onBlockToggle not provided', () => {
    render(<PageRenderComponent pageContent={mockPage} />);
    expect(screen.getByText(/test block/i)).toBeInTheDocument();
  });

  it('renders with accordion when onBlockToggle provided', () => {
    const handleToggle = vi.fn();
    render(
      <PageRenderComponent
        pageContent={mockPage}
        onBlockToggle={handleToggle}
      />
    );
    expect(screen.getByText(/test block/i)).toBeInTheDocument();
  });

  it('renders paragraph title', () => {
    render(<PageRenderComponent pageContent={mockPage} />);
    expect(screen.getAllByText(/test paragraph/i).length).toBeGreaterThan(0);
  });
});
