import React, { useEffect, useState } from 'react';
import CustomImage from '../CustomImage';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import { Loading } from '@nextui-org/react';
import { classNames } from 'shared/utils';
import { genImgUrl } from '../../utils';
import { toast, useMetamask } from 'shared';
import { getDataFormLocal, saveToLocal } from '../../utils/localStorage';
import { LOCAL_KEY } from '../../constants';
import useDeepLink from '../../hooks/useDeepLink';
import BlurImage from '../BlurImage';
import { MetamaskWarningModal } from '../MetamaskWarning';

type Props = {
  categorySlug: string;
  mint?: (id: number) => void;
  more: number;
  thumbnail?: string;
  generatedImg?: number;
};
const GeneratedImage = ({
  categorySlug,
  mint,
  more,
  thumbnail,
  generatedImg,
}: Props) => {
  const { account } = useMetamask();
  const deepLink = useDeepLink();
  const [currentRandom, setCurrentRandom] = useState(generatedImg);
  const [savedList, setSavedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  function generateImage() {
    setLoading(true);
    fetch(`/api/get-random-number/${more}`)
      .then((res) => res.json())
      .then((num) => {
        setCurrentRandom(num);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.message);
      });
  }

  function handleSave() {
    if (!account && window.innerWidth <= 768) {
      setModal(true);
      return;
    }
    saveToLocal(`${LOCAL_KEY}-${more}`, {
      selected: currentRandom,
      list: savedList,
    });
    if (savedList.includes(currentRandom)) {
      toast.error('This image is added already');
      return;
    }
    if (savedList.length === 8) {
      savedList.pop();
    }
    const newList = [currentRandom, ...savedList];
    setSavedList(newList);
    saveToLocal(`${LOCAL_KEY}-${more}`, {
      selected: currentRandom,
      list: newList,
    });
  }

  function handleSelect(selectedNum: number) {
    setCurrentRandom(selectedNum);
  }

  function handleRemove(selected: number) {
    setSavedList((prevState) => prevState.filter((num) => num !== selected));
  }

  function handleMint() {
    if (typeof window === 'undefined') {
      return;
    }
    if (!currentRandom) {
      toast.error('Please generate an image!');
      return;
    }
    if (!account && window.innerWidth <= 768) {
      window.location.href = `${deepLink}/?current=${currentRandom}`;
    } else {
      mint?.(currentRandom);
    }
  }

  useEffect(() => {
    const localData = getDataFormLocal(`${LOCAL_KEY}-${more}`);
    if (!!localData?.selected) {
      setSavedList(localData.list);
      if (!currentRandom) {
        setCurrentRandom(localData.selected);
      }
    }
  }, [more]);

  return (
    <div>
      <div className="relative">
        {loading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Loading type="spinner" size="lg" />
          </div>
        )}
        <div className="aspect-w-1 aspect-h-1">
          {currentRandom ? (
            <CustomImage
              src={genImgUrl(currentRandom)}
              layout="fill"
              alt="gen-img"
              className={classNames(
                'duration-700 ease-in-out group-hover:opacity-75',
                loading ? 'blur-md' : 'blur-0',
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          ) : (
            <BlurImage src={thumbnail} />
          )}
        </div>
      </div>
      {categorySlug === 'generative-art-vending-machine' && (
        <>
          <div className="flex flex-row justify-between gap-2 mt-3">
            <SquareBtn
              css={{ flex: 1 }}
              onClick={generateImage}
              disabled={loading}
            >
              Generate
            </SquareBtn>
            <SquareBtn
              css={{ flex: 1 }}
              onClick={handleSave}
              disabled={loading || !currentRandom}
            >
              Save
            </SquareBtn>

            <SquareBtn
              css={{ flex: 1 }}
              onClick={handleMint}
              disabled={loading || !currentRandom}
            >
              Mint
            </SquareBtn>
          </div>
          <GeneratedArtworkList
            onSelect={handleSelect}
            randomNumbersList={savedList}
            currentNumber={currentRandom}
            onRemove={handleRemove}
          />
        </>
      )}
      {typeof window !== 'undefined' && (
        <MetamaskWarningModal
          onClose={() => setModal(false)}
          visible={modal}
          href={`${deepLink}/?current=${currentRandom}`}
        />
      )}
    </div>
  );
};

export default GeneratedImage;
