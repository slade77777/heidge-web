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

  async function handleMint(tokenId: number) {
    if (!account) {
      toast.error('Please connect wallet');
      return;
    }
    const contract = getContract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      drBillAbi,
    );

    try {
      await contract.mint(tokenId, {
        value: getTotalEthFromWei(),
      });

      const response = await fetch(`/api/mint/confirm/${tokenId}`);
      const data = await response.json();

      if (data.status) {
        toast.success('Minted success');
      } else {
        toast.error('Mint failed');
      }
    } catch (err) {
      toast.error(err?.error?.message);
    }
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
