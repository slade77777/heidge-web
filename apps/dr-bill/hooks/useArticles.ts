import {useQuery} from 'shared';
import {getArticlesByCategory, getArticlesBySlug} from '../api';
import {ArtworkType} from '../types';

export const categorySlugMap = {
  ['vending-machine']: 'vending_machines',

}

export const useArticlesByCategory = (categorySlug: string) => {
  const queryKey = `/${categorySlugMap[categorySlug]}/0`;
  const {data, isLoading, error} = useQuery(
    queryKey,
    () => getArticlesByCategory(categorySlugMap[categorySlug]),
    {refetchOnWindowFocus: false},
  );

  return {
    articles: data as unknown as ArtworkType[],
    isLoading,
    error,
  };
}

export const useArticlesDetailBySlug = (categorySlug: string, articleSlug: string) => {
  const queryKey = `/${categorySlugMap[categorySlug]}/${articleSlug}`;
  const {data, isLoading, error} = useQuery(
    queryKey,
    () => getArticlesBySlug(categorySlug, articleSlug),
    {refetchOnWindowFocus: false},
  );

  return {
    articleDetail: data as unknown as ArtworkType ,
    isLoading,
    error,
  };
}
