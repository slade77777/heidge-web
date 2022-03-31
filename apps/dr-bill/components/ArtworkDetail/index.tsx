import { Container } from '@nextui-org/react';
import { getTotalEthFromWei, toast, useMetamask } from 'shared';
import { Heading, Paragraph } from '../CustomText';
import Watermark from '../Watermark';
import { Content } from '../../types';
import { drBillAbi } from '../../constants/drbillAbi';
import GeneratedImage from './GeneratedImage';

export default function ArtworkDetail({
  artwork,
  categorySlug,
}: {
  artwork: Content;
  categorySlug?: string;
}) {
  const { getContract, account } = useMetamask();

  function handleMint(tokenId: number) {
    if (!account) {
      toast.error('Please connect wallet');
      return;
    }
    const contract = getContract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      drBillAbi,
    );

    contract
      .mint(tokenId, {
        value: getTotalEthFromWei(),
      })
      .then(() => {
        toast.success('Success');
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  }

  if (!artwork) {
    return null;
  }

  return (
    <Watermark text={artwork.title}>
      <Container md>
        <div className="mt-[100px] mb-[200px]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Heading css={{ marginBottom: '30px' }}>{artwork.title}</Heading>
              <Paragraph
                css={{
                  '@xs': { display: 'block !important' },
                  display: 'none',
                }}
              >
                {artwork.text}
              </Paragraph>
            </div>
            <div className="w-full h-auto">
              <GeneratedImage
                categorySlug={categorySlug}
                more={artwork.more}
                mint={handleMint}
              />
            </div>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
