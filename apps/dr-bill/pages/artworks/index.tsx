import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import ArtworkCategories from '../../components/ArtworkCategories';
import { getArtworkByIndex } from '../../@api';
import { Content } from '../../types';

const ArtworkPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  artworks,
}) => {
  return <ArtworkCategories artworks={artworks} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const artworks: Content[] = await getArtworkByIndex(0);

  return {
    props: {
      artworks,
    },
  };
};

export default ArtworkPage;
