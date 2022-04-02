import ShowAndMedia from '../../components/ShowAndMedia';
import { getShowAndMedia } from '../../@api';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Content } from '../../types';

export const ShowAndMediaPage: InferGetStaticPropsType<
  typeof getStaticProps
> = ({ news }) => {
  return <ShowAndMedia news={news} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const news: Content[] = await getShowAndMedia(0);
  return {
    props: {
      news,
    },
  };
};

export default ShowAndMediaPage;
