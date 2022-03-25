import { Container } from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
import { PageNames } from '../../constants/pageNames';
import { Heading, Paragraph } from '../CustomText';
import NextImage from '../NextImage';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import Watermark from '../Watermark';
import { ArtSlugType, ArtworkType } from '../../types';

export default function ArtworkDetail({
  artwork,
  categorySlug,
}: {
  artwork: ArtworkType;
  categorySlug?: ArtSlugType;
}) {
  return (
    <Watermark text="Oblique Cube Composition">
      <Container md>
        <Breadcrumbs
          data={[
            {
              text: 'Home',
              href: '/',
            },
            { text: 'Artworks', href: `${PageNames.ARTWORK.en}` },
            {
              text: 'Generative Art Vending Machine',
              href: `/${PageNames.ARTWORK.en}/${categorySlug}`,
            },
            {
              text: artwork.name,
              href: `/${
                PageNames.ARTWORK.en
              }/${categorySlug}/${artwork.key.toLowerCase()}`,
            },
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Heading css={{ marginBottom: '30px' }}>{artwork.name}</Heading>
              <div className="space-y-3">
                {artwork.fullDescription.map((p, idx) => (
                  <Paragraph
                    key={idx}
                    css={{
                      '@xs': { display: 'block !important' },
                      display: 'none',
                    }}
                  >
                    {p}
                  </Paragraph>
                ))}
              </div>
            </div>
            <div className="w-full h-auto">
              <div>
                <NextImage src={artwork.image.src} alt="123" />
                <div className="flex flex-row justify-between gap-2">
                  <SquareBtn css={{ flex: 1 }}> Generate </SquareBtn>
                  <SquareBtn css={{ flex: 1 }}> Save </SquareBtn>
                  <SquareBtn css={{ flex: 1 }}> Mint </SquareBtn>
                </div>
                <GeneratedArtworkList />
              </div>
            </div>
            <Paragraph css={{ '@xs': { display: 'none' } }}>
              Oblique Cube Composition is a generative art
              &quot;derivative&quot; piece inspired by an OP Art painting
              (acrylic and panel) done by Victor Vasarely, called Hommage a
              l`Hexagon. c.1968. While Vasarely passed before the advent of
              Computer Art his works have always intellectually challenged me as
              a generative artist to derive an algorithm to produce similar
              aesthetic affects. An oblique cube is a form of axonometric
              (parallel) projection where the front face is full size and shape
              (height and width), perpendicular to the viewer and the depth is
              drawn full size along receding lines usually a 45 degree angle. In
              this composition an array of squares are generated. Within each
              square oblique cubes are drawn in pieces from back to front, in a
              random orientation, in random colors. All the cube faces are the
              same random color. A random number &quot;coin flip&quot; algorithm
              determines whether or not a diamond shape is drawn on the front
              face of the cube. All the diamond shapes on the cube faces are the
              same random color. What makes this image interesting to me is the
              way the faces of contiguous cubes combine and how the areas of the
              square that the cube does not cover (the black background)
              integrate into the piece and provide structure producing a visual
              &quot;whole greater than the sum of its parts.&quot;
            </Paragraph>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
