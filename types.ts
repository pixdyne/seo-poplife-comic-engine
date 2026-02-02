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

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  color: string; // Tailwind color class
}

export enum PopColor {
  PINK = 'bg-pink-500',
  CYAN = 'bg-cyan-400',
  YELLOW = 'bg-yellow-400',
  LIME = 'bg-lime-400',
  PURPLE = 'bg-purple-500'
}