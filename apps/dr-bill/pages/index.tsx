import Home from '../components/Home';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getArtworkByIndex, getHomeContents, getShowAndMedia } from '../@api';
import { Content } from '../types';
import { callConcurrent } from '../utils';

const HomePage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  homeData,
  firstArtwork,
  media,
}) => {
  return (
    <>
      <div className="md:h-9" />
      <Home data={homeData} artwork={firstArtwork} media={media} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [homeData, firstArtwork, media] = await callConcurrent<Content>([
    getHomeContents(),
    getArtworkByIndex(2),
    getShowAndMedia(0),
  ]);

  return {
    props: {
      homeData,
      firstArtwork,
      media,
    },
  };
};

export default HomePage;
