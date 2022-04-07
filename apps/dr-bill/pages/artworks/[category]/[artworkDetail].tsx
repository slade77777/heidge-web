import ArtworkDetail from '../../../components/ArtworkDetail';
import { Content } from '../../../types';
import { GetServerSideProps, GetStaticPropsContext } from 'next';
import { getArtworkBySlug } from '../../../@api';

const ArtworkDetailPage = ({
  data,
  parentSlug,
}: {
  data: Content;
  parentSlug: string;
}) => {
  return <ArtworkDetail artwork={data} categorySlug={parentSlug} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetStaticPropsContext,
) => {
  const slug = context.params.artworkDetail as string;
  const parentSlug = context.params.category as string;
  const artworkCategory: Content = await getArtworkBySlug(slug);

  return {
    props: {
      data: artworkCategory,
      parentSlug,
    },
  };
};

export default ArtworkDetailPage;
