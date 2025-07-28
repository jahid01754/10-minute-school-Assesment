export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  id: number;
  text: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface CtaText {
  text: string;
  link: string;
}

export interface Section {
  id: number;
  heading: string;
  content: string;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface Course {
  id: string;
  image: string;
  title: string;
}
