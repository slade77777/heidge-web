import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import ArtworksByCategory from '../../../components/ArtworksByCategory';
import { getArtworkByIndex, getArtworkBySlug } from '../../../@api';
import { Content } from '../../../types';

const CategoryPage: InferGetStaticPropsType<typeof getStaticProps> = ({
  artworkCategory,
}) => {
  return <ArtworksByCategory artworks={[]} category={artworkCategory} />;
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
  const artworkCategory: Content = await getArtworkBySlug(slug);

  return {
    props: {
      artworkCategory,
    },
  };
};

export default CategoryPage;
