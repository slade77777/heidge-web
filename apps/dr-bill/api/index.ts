import { getAxiosInstance } from 'shared';
import { ArtworkType, Response } from '../types';
import { API_URL } from '../constants';

const requester = getAxiosInstance(`${API_URL}/api`);

export function getAllArticles(): Response<ArtworkType[]> {
  return requester.get('/content/0');
}

export function getArticlesByCategory(category: string): Response<ArtworkType[]> {
  return requester.get(`${category}/0`);
}

export function getNumberOfArticlesByCategory(category: string) {
  return requester.get(`${category}`);
}

export function getArticlesBySlug(category: string, slug: string): Response<ArtworkType[]> {
  return requester.get(`${category}/${slug}`)
}
