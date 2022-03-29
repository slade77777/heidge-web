import { Container } from '@nextui-org/react';
import { Heading, Paragraph } from './CustomText';
import NextImage from './NextImage';

export default function ShowAndMediaArticle() {
  return (
    <Container md>
      <div className="mt-[30px] lg:px-[100px]">
        <div className="mt-[100px]"/>
        <div className="hidden lg:block relative">
          <NextImage
            src="https://cdn.discordapp.com/attachments/478474748909846533/946795851022471228/unknown.png"
            layout="responsive"
            alt="banner"/>
        </div>
        <Heading css={{marginBottom: '30px'}}>
          Dr. Bill at the NFT exhibition 02.07.2023
        </Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy.
        </Paragraph>
        <div className="md:float-right w-full md:w-[400px] md:h-[400px] md:p-5 pt-0 mt-[30px]">
          <NextImage
            src="https://cdn.discordapp.com/attachments/478474748909846533/946804622373318656/unknown.png"
            layout="responsive"/>
        </div>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions
          of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
          simply.
        </Paragraph>
        <Heading>
          Lorem Ipsum is simply dummy
        </Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy.
        </Paragraph>
        <div className="h-[200px]"/>
      </div>
    </Container>
  )
}
