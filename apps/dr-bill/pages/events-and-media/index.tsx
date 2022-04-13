import ShowAndMedia from '../../components/ShowAndMedia';
import { getShowAndMedia } from '../../@api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Content } from '../../types';

export const ShowAndMediaPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({ news }) => {
  return <ShowAndMedia news={news} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const news: Content[] = await getShowAndMedia(0);
  return {
    props: {
      news,
    },
  };
};

export default ShowAndMediaPage;
