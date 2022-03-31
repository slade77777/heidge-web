import React, { useCallback, useEffect, useState } from 'react';
import CustomImage from '../CustomImage';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import { Loading } from '@nextui-org/react';
import { classNames } from 'shared/utils';
import { genImgUrl } from '../../utils';
import { toast } from 'shared';
import { getDataFormLocal, saveToLocal } from '../../utils/localStorage';
import { LOCAL_KEY } from '../../constants';

type Props = {
  categorySlug: string;
  mint?: (id: number) => void;
  more: number;
};
const GeneratedImage = ({ categorySlug, mint, more }: Props) => {
  const [currentRandom, setCurrentRandom] = useState(0);
  const [savedList, setSavedList] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateImage = useCallback(() => {
    setLoading(true);
    fetch(`/api/get-random-number/${more}`)
      .then((res) => res.json())
      .then((num) => {
        setCurrentRandom(num);
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  }, [more]);

  function handleSave() {
    saveToLocal(`${LOCAL_KEY}-${more}`, {
      selected: currentRandom,
      list: savedList,
    });
    if (savedList.includes(currentRandom)) {
      toast.error('This image is added already');
      return;
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
      <div className="relative w-full h-full">
        {loading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Loading type="spinner" size="lg" />
          </div>
        )}
        <CustomImage
          src={genImgUrl(currentRandom)}
          width={598}
          height={598}
          alt="gen-img"
          className={classNames(
            'duration-700 ease-in-out group-hover:opacity-75',
            loading ? 'blur-md' : 'blur-0',
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {categorySlug === 'generative-art-vending-machine' && (
        <>
          <div className="flex flex-row justify-between gap-2 mt-3">
            <SquareBtn
              css={{ flex: 1 }}
              onClick={generateImage}
              disabled={loading}
            >
              {loading ? <Loading type="spinner" size="sm" /> : 'Generate'}
            </SquareBtn>
            <SquareBtn css={{ flex: 1 }} onClick={handleSave}>
              Save
            </SquareBtn>
            <SquareBtn css={{ flex: 1 }} onClick={() => mint(currentRandom)}>
              Mint
            </SquareBtn>
          </div>
          <GeneratedArtworkList
            onSelect={handleSelect}
            randomNumbersList={savedList.slice(0, 8)}
            currentNumber={currentRandom}
          />
        </>
      )}
    </div>
  );
};

export default GeneratedImage;
