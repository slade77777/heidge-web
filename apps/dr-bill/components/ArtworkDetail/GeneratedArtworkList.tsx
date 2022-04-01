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
    <>
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
            <div className="text-center h-6 hidden lg:block">
              <button
                onClick={() => onRemove(number)}
                className={classNames(
                  'active:text-gray-300 active:scale-125 transition-all ease-linear w-6 h-6 rounded-full hidden group-hover:inline-block font-bold hover:text-red-500',
                  isDark ? 'text-amber-400' : 'text-black',
                )}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-3 lg:hidden">
        <button
          className="underline hover:text-red-500 text-sm md:text-base"
          onClick={() => onRemove(currentNumber)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
