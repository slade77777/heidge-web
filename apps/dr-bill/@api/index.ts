import { Content } from '../types';

const ssrBaseUrl = process.env.API_URL;

export function getHomeContents(): Promise<Content[]> {
  return fetch(`${ssrBaseUrl}/content/home/0`).then((res) => res.json());
}

export function getArtworkByIndex(index: number) {
  return fetch(`${ssrBaseUrl}/content/artworks/${index}`).then((res) =>
    res.json(),
  );
}

export function getArtworkCategoryByIndex(index: number, category: string) {
  return fetch(`${ssrBaseUrl}/content/${category}/${index}`).then((res) =>
    res.json(),
  );
}

export function getArtworkBySlug(slug: string) {
  return fetch(`${ssrBaseUrl}/content/artworks/${slug}`).then((res) =>
    res.json(),
  );
}

export function getShowAndMedia(index: number) {
  return fetch(`${ssrBaseUrl}/content/show-and-media/${index}`).then((res) =>
    res.json(),
  );
}
