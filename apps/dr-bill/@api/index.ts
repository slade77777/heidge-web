import { Content } from '../types';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export function getHomeContents(): Promise<Content[]> {
  return fetch(`${baseUrl}/content/home/0`).then((res) => res.json());
}

export function getArtworkByIndex(index: number) {
  return fetch(`${baseUrl}/content/artworks/${index}`).then((res) =>
    res.json(),
  );
}

export function getArtworkCategoryByIndex(index: number, category: string) {
  return fetch(`${baseUrl}/content/${category}/${index}`).then((res) =>
    res.json(),
  );
}

export function getArtworkBySlug(slug: string) {
  return fetch(`${baseUrl}/content/artworks/${slug}`).then((res) => res.json());
}

export function getShowAndMedia(index: number) {
  return fetch(`${baseUrl}/content/show-and-media/${index}`).then((res) =>
    res.json(),
  );
}
