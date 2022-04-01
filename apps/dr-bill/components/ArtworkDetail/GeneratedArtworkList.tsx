import CustomImage from '../CustomImage';
import { classNames } from 'shared/utils';
import { genImgUrl } from '../../utils';
import { useTheme } from '@nextui-org/react';

export default function GeneratedArtworkList({
  randomNumbersList,
  currentNumber,
  onSelect,
  onRemove,
}: {
  randomNumbersList: number[];
  currentNumber?: number;
  onSelect?: (url: number) => void;
  onRemove?: (url: number) => void;
}) {
  const { isDark } = useTheme();
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-[9px] mt-2">
      {randomNumbersList.map((number) => (
        <div key={number} className="group">
          <div
            onClick={() => onSelect(number)}
            className={classNames(
              'aspect-w-1 aspect-h-1 cursor-pointer hover:opacity-75',
              currentNumber === number
                ? `${
                    isDark
                      ? 'border-2 border-amber-400'
                      : 'border-2 border-black'
                  }`
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
          {currentNumber !== number && (
            <div className="text-center hidden group-hover:block">
              <button
                onClick={() => onRemove(number)}
                className="active:text-gray-300 active:scale-125 transition-all ease-linear rounded-full w-6 h-6"
              >
                <span
                  className={
                    isDark ? 'text-sm text-amber-400' : 'text-sm text-black'
                  }
                >
                  ✕
                </span>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
