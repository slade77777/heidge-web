const Arrow = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="49"
      viewBox="0 0 32 49"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.048 0L32 6.952L14.725 24.226L32 41.502L25.048 48.454L0.823 24.228L25.048 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
