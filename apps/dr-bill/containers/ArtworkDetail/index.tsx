import {Container} from '@nextui-org/react';
import Breadcrumbs from '../../components/Breadcrumbs';
import {PageNames} from '../../constants/pageNames';
import {Heading, Paragraph} from '../../components/Text';
import NextImage from '../../components/Image/NextImage';

const src = 'https://cdn.discordapp.com/attachments/748042111148097556/944153275819778098/unknown.png';
export default function ArtworkDetail() {
  return (
    <Container md>
      <Breadcrumbs
        data={[
          {
            text: 'Home',
            href: '/',
          },
          {text: 'Artworks', href: `${PageNames.ARTWORK.en}`},
          {text: 'Generative Art Vending Machine', href: `generative-art-vending-machine`},
          {text: 'Oblique Cube Composition', href: 'oblique-cube-composition'},
        ]}
      />
      <div className="mt-[100px] mb-[200px]">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <Heading css={{marginBottom: '30px'}}> Oblique Cube Composition </Heading>
            <Paragraph>
              Oblique Cube Composition is a generative art "derivative" piece inspired by an OP Art painting (acrylic
              and
              panel) done by Victor Vasarely, called Hommage a l`Hexagon. c.1968. While Vasarely passed before the
              advent
              of
              Computer Art his works have always intellectually challenged me as a generative artist to derive an
              algorithm
              to produce similar aesthetic affects.

              An oblique cube is a form of axonometric (parallel) projection where the front face is full size and shape
              (height and width), perpendicular to the viewer and the depth is drawn full size along receding lines
              usually
              a 45 degree angle.

              In this composition an array of squares are generated. Within each square oblique cubes are drawn in
              pieces
              from back to front, in a random orientation, in random colors. All the cube faces are the same random
              color.
              A
              random number "coin flip" algorithm determines whether or not a diamond shape is drawn on the front face
              of
              the cube. All the diamond shapes on the cube faces are the same random color.

              What makes this image interesting to me is the way the faces of contiguous cubes combine and how the areas
              of
              the square that the cube does not cover (the black background) integrate into the piece and provide
              structure
              producing a visual "whole greater than the sum of its parts."
            </Paragraph>
          </div>
          <div className="w-full h-auto">
            <NextImage src={src} alt="123"/>
            <div>

            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}
