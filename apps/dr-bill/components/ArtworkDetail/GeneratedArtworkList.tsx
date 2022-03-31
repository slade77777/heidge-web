import CustomImage from '../CustomImage';
import { classNames } from 'shared/utils';
import { genImgUrl } from '../../utils';

export default function GeneratedArtworkList({
  randomNumbersList,
  currentNumber,
  onSelect,
}: {
  randomNumbersList: number[];
  currentNumber?: number;
  onSelect?: (url: number) => void;
}) {
  return (
    <div className="grid grid-cols-8 gap-[10px] mt-2">
      {randomNumbersList.map((number) => (
        <div
          key={number}
          onClick={() => onSelect(number)}
          className={classNames(
            'w-[66px] h-[66px]',
            currentNumber === number ? 'border-2 border-black' : '',
          )}
        >
          <CustomImage
            src={genImgUrl(number)}
            width={66}
            height={66}
            objectFit="cover"
            alt="generated photo"
          />
        </div>
      ))}
    </div>
  );
}
