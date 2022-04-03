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

type Props = {
  categorySlug: string;
  mint?: (id: number) => void;
  more: number;
};
const GeneratedImage = ({ categorySlug, mint, more }: Props) => {
  const { account } = useMetamask();
  const [currentRandom, setCurrentRandom] = useState(0);
  const [savedList, setSavedList] = useState([]);
  const [loading, setLoading] = useState(false);

  function generateImage() {
    if (!account) {
      toast.error('Please connect wallet');
      return;
    }
    setLoading(true);
    fetch(`/api/get-random-number/${more}`)
      .then((res) => res.json())
      .then((num) => {
        setCurrentRandom(num);
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  }

  function handleSave() {
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

  useEffect(() => {
    const localData = getDataFormLocal(`${LOCAL_KEY}-${more}`);
    if (!!localData?.selected) {
      setSavedList(localData.list);
      setCurrentRandom(localData.selected);
    } else {
      generateImage();
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
            <SquareBtn css={{ flex: 1 }} onClick={handleSave}>
              Save
            </SquareBtn>
            <SquareBtn
              disabled={!account}
              css={{ flex: 1 }}
              onClick={() => mint(currentRandom)}
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
    </div>
  );
};

export default GeneratedImage;
