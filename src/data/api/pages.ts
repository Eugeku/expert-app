import type { Page } from '../models/page';

const PAGES_URL = '/data/pages.json';

let cache: Page[] | null = null;

const loadPages = async (): Promise<Page[] | null> => {
  if (cache) {
    return cache;
  }

  const response = await fetch(PAGES_URL);

  if (!response.ok) {
    throw new Error('Pages loading failed');
  }

  cache = await response.json();
  return cache;
};

export const getPageById = async (
  pageId: string
): Promise<Page | undefined> => {
  const pages = await loadPages();
  return pages?.find((page) => page.page_id === pageId);
};
