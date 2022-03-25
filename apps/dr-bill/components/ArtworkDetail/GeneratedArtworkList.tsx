// import NextImage from '../NextImage';

export default function GeneratedArtworkList({
  generatedImages,
}: {
  generatedImages: Record<number, string>;
}) {
  return (
    <div className="flex flex-row items h-[66px] gap-2 mt-2 flex-wrap">
      {Object.keys(generatedImages).map((key, index) => (
        <img
          src={generatedImages[key]}
          alt={key}
          className="w-16 h-16"
          loading="lazy"
          key={index}
        />
      ))}
    </div>
  );
}
