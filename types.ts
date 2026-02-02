export interface ComicResponse {
  caption: string;
  soundEffect: string;
  colorTheme: string;
}

export interface PopArtAsset {
  id: string;
  url: string;
  title: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  mainImage: SanityImage;
  contentImage: SanityImage;
  content?: PortableTextBlock[];
  color: string; // Tailwind color class
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: PortableTextChild[];
  style?: string;
  markDefs?: MarkDef[];
}

export interface PortableTextChild {
  _type: string;
  _key: string;
  text?: string;
  marks?: string[];
}

export interface MarkDef {
  _type: string;
  _key: string;
  href?: string;
}

export enum PopColor {
  PINK = 'bg-pink-500',
  CYAN = 'bg-cyan-400',
  YELLOW = 'bg-yellow-400',
  LIME = 'bg-lime-400',
  PURPLE = 'bg-purple-500'
}