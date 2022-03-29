import ArtworkDetail from '../../../components/ArtworkDetail';
import { callConcurrent } from '../../../utils';
import { Content } from '../../../types';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getArtworkByIndex,
  getArtworkBySlug,
  getArtworkCategoryByIndex,
} from '../../../@api';

const ArtworkDetailPage = ({
  data,
  parentSlug,
}: {
  data: Content;
  parentSlug: string;
}) => {
  return <ArtworkDetail artwork={data} categorySlug={parentSlug} />;
};

export const getStaticPaths = async () => {
  const allArtworks = await getArtworkByIndex(0);
  const promises = allArtworks.map((aw) =>
    getArtworkCategoryByIndex(0, aw.slug),
  );
  const response = await callConcurrent<Content>(promises);
  const data = response.reduce<Content[]>((acc, vl) => acc.concat(vl), []);

  if (!data.length) {
    throw Error('can not render page');
  }

  return {
    paths: data.map((p) => ({
      params: {
        category: p.content_type,
        artworkDetail: p.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const slug = context.params.artworkDetail as string;
  const parentSlug = context.params.category as string;
  const artworkCategory: Content = await getArtworkBySlug(slug);

  return {
    props: {
      data: artworkCategory,
      parentSlug,
    },
  };
};

export default ArtworkDetailPage;
