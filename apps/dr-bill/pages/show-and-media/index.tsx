import ShowAndMedia from '../../components/ShowAndMedia';
import { getShowAndMedia } from '../../@api';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const ShowAndMediaPage: InferGetStaticPropsType<
  typeof getStaticProps
> = ({ data }) => {
  return <ShowAndMedia />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getShowAndMedia(0);
  return {
    props: {
      data,
    },
  };
};

export default ShowAndMediaPage;
