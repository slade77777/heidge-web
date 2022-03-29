import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import ArtworksByCategory from '../../../components/ArtworksByCategory';
import {
  getArtworkByIndex,
  getArtworkBySlug,
  getArtworkCategoryByIndex,
} from '../../../@api';
import { callConcurrent } from '../../../utils';

const CategoryPage: InferGetStaticPropsType<typeof getStaticProps> = ({
  artworkCategory,
  artworks,
}) => {
  return <ArtworksByCategory artworks={artworks} category={artworkCategory} />;
};

export const getStaticPaths = async () => {
  const artworks = await getArtworkByIndex(0);
  return {
    paths: artworks.map((artwork) => ({ params: { category: artwork.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const slug = context.params.category as string;

  const [artworkCategory, artworks] = await callConcurrent([
    getArtworkBySlug(slug),
    getArtworkCategoryByIndex(0, slug),
  ]);

  return {
    props: {
      artworkCategory,
      artworks,
    },
  };
};

export default CategoryPage;
