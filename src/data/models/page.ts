export type Paragraph = {
  paragraph_id: string;
  paragraph_title: string | null;
  paragraph_text: string;
  paragraph_list?: ParagraphListItem[] | null;
  paragraph_img?: ParagraphImg;
};

export type ParagraphListItem = {
  item_id: string;
  item_title: string | null;
  item_text: string;
};

export type ParagraphImg = {
  img_label: string;
  img_src: string;
  img_alt: string;
};

export type Section = {
  section_id: string;
  section_title: string;
  section_paragraphs: Paragraph[];
};

export type Block = {
  block_id: string;
  block_title: string;
  block_sections: Section[];
};

export type Page = {
  page_id: string;
  page_title: string;
  page_blocks: Block[];
};

export const getBlockById: (
  page: Page,
  blockId?: string
) => Block | undefined = (page: Page, blockId?: string): Block | undefined => {
  const blocks = page.page_blocks;

  if (!blocks.length) return undefined;

  if (!blockId) return blocks[0];

  return blocks.find((b) => b.block_id === blockId) ?? blocks[0];
};

export const getSectionById: (
  page: Page,
  blockId?: string,
  sectionId?: string
) => Section | undefined = (
  page: Page,
  sectionId?: string,
  blockId?: string
): Section | undefined => {
  const block = getBlockById(page, blockId);
  if (!block || !block.block_sections.length) return undefined;

  if (!sectionId) return block.block_sections[0];

  return (
    block.block_sections.find((s) => s.section_id === sectionId) ??
    block.block_sections[0]
  );
};

export const getParagraphById: (
  page: Page,
  blockId?: string,
  sectionId?: string,
  paragraphId?: string
) => Paragraph | undefined = (
  page: Page,
  paragraphId?: string,
  sectionId?: string,
  blockId?: string
): Paragraph | undefined => {
  const section = getSectionById(page, blockId, sectionId);
  if (!section || !section.section_paragraphs.length) return undefined;

  if (!paragraphId) return section.section_paragraphs[0];

  return (
    section.section_paragraphs.find((p) => p.paragraph_id === paragraphId) ??
    section.section_paragraphs[0]
  );
};
