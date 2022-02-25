const Arrow = ({className}: { className?: string }) => {
  return (
    <svg className={className}
         width="31"
         height="12"
         viewBox="0 0 31 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12L31 6L24 0V5H0V7H24V12Z" fill="currentColor"/>
    </svg>

  );
};

export default Arrow;
