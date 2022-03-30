// import NextImage from '../NextImage';

import { classNames } from 'shared/utils';

export default function GeneratedArtworkList({
  imageUrlsList,
  currentPhoto,
  onSelect,
}: {
  imageUrlsList: string[];
  currentPhoto?: string;
  onSelect?: (url: string) => void;
}) {
  return (
    <div className="grid grid-cols-8 gap-[10px] mt-2">
      {imageUrlsList.map((url) => (
        <div key={url}>
          <img
            src={url}
            onClick={() => onSelect(url)}
            className={classNames(
              'w-[66px] h-[66px]"',
              currentPhoto === url ? 'border-2 border-black' : '',
            )}
            loading="lazy"
            alt="generated photo"
          />
        </div>
      ))}
    </div>
  );
}
