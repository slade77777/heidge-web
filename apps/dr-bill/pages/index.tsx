import Home from '../components/Home';
import { InferGetStaticPropsType } from 'next';
import type { GetStaticPropsContext, GetStaticProps } from 'next';
import { getArtworkByIndex, getHomeContents, getShowAndMedia } from '../@api';
import { Content } from '../types';

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
  const response = await Promise.allSettled([
    getHomeContents(),
    getArtworkByIndex(2),
    getShowAndMedia(0),
  ]);
  const [homeData, firstArtwork, media] = response
    .filter((p) => p.status === 'fulfilled')
    .map((item: PromiseFulfilledResult<Content[] | Content>) => item.value);

  return {
    props: {
      homeData,
      firstArtwork,
      media,
    },
  };
};

export default HomePage;
