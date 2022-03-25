import { useMemo } from 'react';
import type { NextPage } from 'next';
import ArtworkDetail from '../../../components/ArtworkDetail';
import { useRouter } from 'next/router';
import { ARTWORKS } from '../../../constants/artworks';
import { arr2obj } from '../../../utils';
import { ArtSlugType } from '../../../types';

const ArtworkDetailPage: NextPage = () => {
  const { query, asPath } = useRouter();

  const detail = useMemo(() => {
    const category = asPath.split('/')?.[2] as ArtSlugType;

    return {
      parentSlug: category,
      data: arr2obj(ARTWORKS[category]?.detail?.artworks || [])?.[
        query.artworkDetail as string
      ],
    };
  }, [asPath, query.artworkDetail]);

  return (
    <ArtworkDetail artwork={detail.data} categorySlug={detail.parentSlug} />
  );
};

export default ArtworkDetailPage;
