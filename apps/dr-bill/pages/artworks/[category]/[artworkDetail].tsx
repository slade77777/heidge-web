import ArtworkDetail from '../../../components/ArtworkDetail';
import { Content } from '../../../types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getArtworkBySlug } from '../../../@api';

const ArtworkDetailPage = ({
  data,
  parentSlug,
  generatedImg,
}: {
  data: Content;
  parentSlug: string;
  generatedImg?: number;
}) => {
  return (
    <ArtworkDetail
      artwork={data}
      categorySlug={parentSlug}
      generatedImg={generatedImg}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const searchQuery = context.query?.current || 0;
  const slug = context.params.artworkDetail as string;
  const parentSlug = context.params.category as string;
  const artworkCategory: Content = await getArtworkBySlug(slug);

  return {
    props: {
      data: artworkCategory,
      parentSlug,
      generatedImg: Number(searchQuery),
    },
  };
};

export default ArtworkDetailPage;
