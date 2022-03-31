import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from '@nextui-org/react';
import { Heading, Paragraph } from '../CustomText';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import Watermark from '../Watermark';
import { Content } from '../../types';
import { getRandomNumber } from '../../utils';
import { getDataFormLocal, saveToLocal } from '../../utils/localStorage';
import { getTotalEthFromWei, toast, useMetamask } from 'shared';
import { drBillAbi } from '../../constants/drbillAbi';
import CustomImage from '../CustomImage';

function genImgUrl(more: number) {
  const random = getRandomNumber(1, 999);
  return `${process.env.NEXT_PUBLIC_API_URL}/api/generator/${more}-${random}`;
}

const LOCAL_KEY = 'photo-generation';

export default function ArtworkDetail({
  artwork,
  categorySlug,
}: {
  artwork: Content;
  categorySlug?: string;
}) {
  const { getContract, account } = useMetamask();
  const [imgUrls, setImgUrls] = useState([]);
  const [generatedPhoto, setGeneratedPhoto] = useState('');

  const generateImagesCb = useCallback(() => {
    const newPhotoUrl = genImgUrl(artwork.more);
    setGeneratedPhoto(newPhotoUrl);
    setImgUrls([...imgUrls, newPhotoUrl]);
  }, [artwork.more, imgUrls]);

  useEffect(() => {
    const dataStored = getDataFormLocal(`${LOCAL_KEY}-${artwork.more}`);
    if (!!dataStored?.selected) {
      setImgUrls(dataStored.list);
      setGeneratedPhoto(dataStored.selected);
    } else {
      generateImagesCb();
    }
  }, []);

  function handleSave() {
    toast.success('Saved data');
    saveToLocal(`${LOCAL_KEY}-${artwork.more}`, {
      list: imgUrls,
      selected: generatedPhoto,
    });
  }

  function handleMint() {
    if (!account) {
      toast.error('Please connect wallet');
      return;
    }
    const contract = getContract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      drBillAbi,
    );

    const randomNo = generatedPhoto.split('-')[1];
    const tokenId = artwork.more * 0x100000000 + Number(randomNo);

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
              <div>
                <CustomImage
                  src={generatedPhoto}
                  width={598}
                  height={598}
                  alt="gen-img"
                />
                {categorySlug === 'generative-art-vending-machine' && (
                  <>
                    <div className="flex flex-row justify-between gap-2 mt-3">
                      <SquareBtn
                        css={{ flex: 1 }}
                        onClick={artwork.id ? generateImagesCb : undefined}
                      >
                        Generate
                      </SquareBtn>
                      <SquareBtn css={{ flex: 1 }} onClick={handleSave}>
                        Save
                      </SquareBtn>
                      <SquareBtn css={{ flex: 1 }} onClick={handleMint}>
                        Mint
                      </SquareBtn>
                    </div>
                    <GeneratedArtworkList
                      onSelect={setGeneratedPhoto}
                      imageUrlsList={imgUrls}
                      currentPhoto={generatedPhoto}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
