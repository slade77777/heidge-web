import type { NextPage } from 'next';
import ArtworksByCategory from '../../../components/ArtworksByCategory';
import { useRouter } from 'next/router';
import { genSlug } from '../../../utils';

const categories = [
  {
    title: 'Generative Art Vending Machine',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [
      {
        src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275551338517/unknown.png',
      },
      {
        src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275819778098/unknown.png',
      },
    ],
  },
  {
    title: 'Plotter Art',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: Array.from(Array(29).keys()).map((_, i) => ({
      src: `https://res.cloudinary.com/suborg/image/upload/v1647255699/DrBill/1920/plotter-${
        i + 1
      }.png`,
    })),
  },
  {
    title: 'HEN',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [
      {
        src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275014463488/unknown.png',
      },
    ],
  },
  {
    title: 'Vending Machine',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [
      {
        src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275232563260/unknown.png',
      },
    ],
  },
  {
    title: 'LovGen',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [
      {
        src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275014463488/unknown.png',
      },
    ],
  },
].reduce(
  (acc, element) => ({
    ...acc,
    [genSlug(element.title)]: element,
  }),
  [],
);

const artworks = Array.from(Array(29).keys()).map((_, i) => ({
  title: 'Coming and Going',
  description:
    'Good vibrations is an original Op Art piece. It is a two tile tessellation where one tile...',
  image: [
    {
      src: `https://res.cloudinary.com/suborg/image/upload/v1647255699/DrBill/1920/plotter-${
        i + 1
      }.png`,
    },
  ],
}));

const CategoryPage: NextPage = () => {
  const { query } = useRouter();
  const category = categories[query.category as string];
  return <ArtworksByCategory artworks={artworks} category={category} />;
};

export default CategoryPage;
