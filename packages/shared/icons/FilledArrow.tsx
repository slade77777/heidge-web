const FilledArrow = ({className}: { className?: string }) => {
  return (
    <svg
      className={className}
      width="5"
      height="6"
      viewBox="0 0 5 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3.00042L0.5 5.5985L0.5 0.402344L5 3.00042Z" fill="currentColor"/>
    </svg>
  );
};

export default FilledArrow;
