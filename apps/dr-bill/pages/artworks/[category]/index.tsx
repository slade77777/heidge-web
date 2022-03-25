import type { NextPage } from 'next';
import ArtworksByCategory from '../../../components/ArtworksByCategory';
import { useRouter } from 'next/router';
import { ARTWORKS } from '../../../constants/artworks';

const CategoryPage: NextPage = () => {
  const { query } = useRouter();
  const category = ARTWORKS[query.category as string];

  return (
    <ArtworksByCategory
      artworks={category?.detail?.artworks}
      category={category?.detail}
    />
  );
};

export default CategoryPage;
