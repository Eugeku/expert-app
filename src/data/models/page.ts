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
