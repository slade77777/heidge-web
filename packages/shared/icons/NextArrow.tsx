const NextArrow = ({className}: { className?: string }) => {
  return (
    <svg
      className={className}
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12L13 6L6 0V5H0V7H6V12Z" fill="currentColor"/>
    </svg>
  );
};

export default NextArrow;
