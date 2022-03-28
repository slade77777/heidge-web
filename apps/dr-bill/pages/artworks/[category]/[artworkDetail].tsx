import { useMemo } from 'react';
import type { GetStaticPathsContext, NextPage } from 'next';
import ArtworkDetail from '../../../components/ArtworkDetail';
import { useRouter } from 'next/router';
import { ARTWORKS } from '../../../constants/artworks';
import { arr2obj } from '../../../utils';
import { ArtSlugType } from '../../../types';
import { GetStaticProps, GetStaticPropsContext } from 'next';

const ArtworkDetailPage: NextPage = () => {
  const { query, asPath } = useRouter();

  const detail = useMemo(() => {
    const category = asPath.split('/')?.[2] as ArtSlugType;

    return {
      parentSlug: category,
      data: arr2obj(ARTWORKS[category]?.detail?.artworks || [])?.[
        query.artworkDetail as string
      ],
    };
  }, [asPath, query.artworkDetail]);

  return (
    <ArtworkDetail artwork={detail.data} categorySlug={detail.parentSlug} />
  );
};

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  const slug = context.locales;
  // const artworks = await getArtworkCategoryByIndex(0, '');
  console.log('context', context);
  return {
    paths: [{ params: { category: '/dfdf' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const slug = context.params.category as string;
  // const artworkCategory: Content = await getArtworkBySlug(slug);

  return {
    props: {},
  };
};

export default ArtworkDetailPage;
