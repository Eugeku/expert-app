import { describe, it, expect } from 'vitest';
import { getBlockById, getSectionById, getParagraphById } from './page';
import type { Page } from './page';

const mockPage: Page = {
  page_id: 'test-page',
  page_title: 'Test Page',
  page_blocks: [
    {
      block_id: 'block-1',
      block_title: 'Block 1',
      block_sections: [
        {
          section_id: 'section-1',
          section_title: 'Section 1',
          section_paragraphs: [
            {
              paragraph_id: 'para-1',
              paragraph_title: 'Paragraph 1',
              paragraph_text: 'Text 1',
            },
          ],
        },
      ],
    },
    {
      block_id: 'block-2',
      block_title: 'Block 2',
      block_sections: [],
    },
  ],
};

describe('page models', () => {
  describe('getBlockById', () => {
    it('returns first block when no id provided', () => {
      const result = getBlockById(mockPage);
      expect(result?.block_id).toBe('block-1');
    });

    it('returns block by id', () => {
      const result = getBlockById(mockPage, 'block-2');
      expect(result?.block_id).toBe('block-2');
    });

    it('returns first block for non-existent id', () => {
      const result = getBlockById(mockPage, 'non-existent');
      expect(result?.block_id).toBe('block-1');
    });

    it('returns undefined for empty page', () => {
      const emptyPage: Page = {
        page_id: 'empty',
        page_title: 'Empty',
        page_blocks: [],
      };
      const result = getBlockById(emptyPage);
      expect(result).toBeUndefined();
    });
  });

  describe('getSectionById', () => {
    it('returns first section when no id provided', () => {
      const result = getSectionById(mockPage);
      expect(result?.section_id).toBe('section-1');
    });

    it('returns section by id', () => {
      const result = getSectionById(mockPage, undefined, 'section-1');
      expect(result?.section_id).toBe('section-1');
    });

    it('returns first section for non-existent block', () => {
      const result = getSectionById(mockPage, 'non-existent');
      expect(result?.section_id).toBe('section-1');
    });

    it('returns first section for block with no sections', () => {
      const result = getSectionById(mockPage, 'block-2');
      expect(result?.section_id).toBe('section-1');
    });
  });

  describe('getParagraphById', () => {
    it('returns first paragraph when no id provided', () => {
      const result = getParagraphById(mockPage);
      expect(result?.paragraph_id).toBe('para-1');
    });

    it('returns paragraph by id', () => {
      const result = getParagraphById(mockPage, 'para-1');
      expect(result?.paragraph_id).toBe('para-1');
    });

    it('returns first paragraph for non-existent section', () => {
      const result = getParagraphById(mockPage, 'block-1', 'non-existent');
      expect(result?.paragraph_id).toBe('para-1');
    });

    it('returns first paragraph for section with no paragraphs', () => {
      const pageWithEmptySection: Page = {
        page_id: 'test',
        page_title: 'Test',
        page_blocks: [
          {
            block_id: 'block-1',
            block_title: 'Block',
            block_sections: [
              {
                section_id: 'section-1',
                section_title: 'Section',
                section_paragraphs: [],
              },
            ],
          },
        ],
      };
      const result = getParagraphById(pageWithEmptySection);
      expect(result).toBeUndefined();
    });
  });
});
