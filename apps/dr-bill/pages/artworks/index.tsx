import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ArtworkCategories from '../../components/ArtworkCategories';
import { getArtworkByIndex } from '../../@api';
import { Content } from '../../types';

const ArtworkPage: InferGetStaticPropsType<typeof getStaticProps> = ({
  artworks,
}) => {
  return <ArtworkCategories artworks={artworks} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const artworks: Content[] = await getArtworkByIndex(0);

  return {
    props: {
      artworks,
    },
  };
};

export default ArtworkPage;
