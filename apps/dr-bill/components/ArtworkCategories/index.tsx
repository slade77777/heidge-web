import {Container} from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
import {PageNames} from '../../constants/pageNames';
import {Heading, Paragraph} from '../CustomText';
import ArtworkList from './ArtworkList';
import Watermark from '../Watermark';

export default function ArtworkCategories() {
  return (
    <Watermark text="Artworks">
      <Container md>
        <Breadcrumbs
          data={[
            {
              text: 'Home',
              href: '/',
            },
            {text: 'Artworks', href: `${PageNames.ARTWORK.en}`},
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <Heading css={{margin: '72px 0'}}> Artworks </Heading>
          <ArtworkList/>
          <Paragraph css={{margin: '72px 0'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy.
          </Paragraph>
        </div>
      </Container>
    </Watermark>
  )
}
