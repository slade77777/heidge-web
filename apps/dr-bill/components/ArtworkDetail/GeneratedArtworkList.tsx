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
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-[9px] mt-2">
      {randomNumbersList.map((number) => (
        <div
          key={number}
          onClick={() => onSelect(number)}
          className={classNames(
            'aspect-w-1 aspect-h-1 cursor-pointer hover:opacity-75',
            currentNumber === number
              ? 'border-2 border-black'
              : 'border-2 border-transparent',
          )}
        >
          <CustomImage
            src={genImgUrl(number)}
            width={60}
            height={60}
            layout="fill"
            objectFit="cover"
            alt="generated photo"
          />
        </div>
      ))}
    </div>
  );
}
