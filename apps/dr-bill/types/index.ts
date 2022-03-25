export type ArtSlugType = 'plotter-art' | 'generative-art-vending-machine';

export type ArtPhoto = {
  src: string;
  alt?: string;
};

export type ArtworkType = {
  key: string;
  name: string;
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
