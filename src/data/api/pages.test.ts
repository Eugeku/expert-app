import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getPageById } from './pages';

vi.stubGlobal(
  'fetch',
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: async () => [],
    })
  ) as unknown as ReturnType<typeof fetch>
);

const mockPages = [
  {
    page_id: 'page-1',
    page_title: 'Page 1',
    page_blocks: [],
  },
  {
    page_id: 'page-2',
    page_title: 'Page 2',
    page_blocks: [],
  },
];

describe('pages API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('fetch', vi.fn());
  });

  it('fetches pages from API', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPages,
    } as unknown as Response);

    const result = await getPageById('page-1');
    expect(fetch).toHaveBeenCalledWith('/data/pages.json');
    expect(result).toEqual(mockPages[0]);
  });

  it('returns page by id', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPages,
    } as unknown as Response);

    const result = await getPageById('page-2');
    expect(result?.page_id).toBe('page-2');
  });

  it('returns undefined for non-existent page', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPages,
    } as unknown as Response);

    const result = await getPageById('non-existent');
    expect(result).toBeUndefined();
  });
});
