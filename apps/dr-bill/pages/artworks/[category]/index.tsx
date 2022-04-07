import type {
  GetServerSideProps,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from 'next';
import ArtworksByCategory from '../../../components/ArtworksByCategory';
import { getArtworkBySlug, getArtworkCategoryByIndex } from '../../../@api';
import { callConcurrent } from '../../../utils';

const CategoryPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  artworkCategory,
  artworks,
}) => {
  return <ArtworksByCategory artworks={artworks} category={artworkCategory} />;
};

export const getServerSideProps: GetServerSideProps = async (
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
