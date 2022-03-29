import Home from '../components/Home';
import { InferGetStaticPropsType } from 'next';
import type { GetStaticProps } from 'next';
import { getArtworkByIndex, getHomeContents, getShowAndMedia } from '../@api';
import { Content } from '../types';
import { callConcurrent } from '../utils';

const HomePage: InferGetStaticPropsType<typeof getStaticProps> = ({
  homeData,
  firstArtwork,
  media,
}) => {
  return (
    <>
      <div className="h-9" />
      <Home data={homeData} artwork={firstArtwork} media={media} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
