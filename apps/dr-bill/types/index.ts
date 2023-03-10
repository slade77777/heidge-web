export type ArtSlugType = 'plotter-art' | 'generative-art-vending-machine';

export type ArtPhoto = {
  src: string;
  alt?: string;
};

export type ArtworkType = {
  key: string;
  name: string;
  id?: number;
  description?: string;
  fullDescription?: string[];
  image: ArtPhoto;
};

export type ArtDetailType = {
  page: string;
  slug: ArtSlugType;
  description?: string[];
  artworks: ArtworkType[];
};

export type ArtworkCategory = {
  title: string;
  isHighlight?: boolean;
  slug: ArtSlugType;
  image: ArtPhoto;
  detail: ArtDetailType;
  description?: string;
};

export type MediaShowType = {
  key: string;
  label?: string;
  title: string;
  description?: string;
  image: ArtPhoto;
  href: string;
};

export enum MediaType {
  Event = 'event',
  All = 'all',
  Video = 'video',
  Article = 'article',
}

export type ContentType =
  | 'home'
  | 'events-and-media'
  | 'generative-art-vending-machine'
  | 'plotter-art'
  | 'artworks';

export type Content = {
  id: number;
  title: string;
  short_title?: string;
  text?: string;
  image: string;
  display_order?: number;
  slug?: string;
  tags?: MediaType;
  link?: string;
  more?: number;
  content_type?: ContentType;
};

export type Response<T> = Promise<{
  data: T;
}>;

export type Card = {
  id: number;
  href?: string;
  imageSrc: string;
  description?: string;
  title: string;
  tag?: string;
};
export type Ratio = `aspect-w-${number} aspect-h-${number}`;
