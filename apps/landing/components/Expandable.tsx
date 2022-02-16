import React, { ReactNode, useRef, useState } from 'react';
import { Arrow } from 'shared/icons';

const arrowUp =
  'transform text-slate-400 w-5 transition-all ease-in-out duration-300';
const arrowDown =
  'transform rotate-180 text-teal-400 w-5 transition-all ease-in-out duration-300';

const activeText =
  'text-left font-semibold text-fuchsia-900 transition-all ease-in-out duration-300 group-hover:text-teal-400';
const text =
  'text-left font-semibold text-teal-400 transition-all ease-in-out duration-300';

const Expandable = ({
  title,
  content,
  className,
  titleClassName,
  textClassName,
}: {
  title: string;
  content: ReactNode;
  titleClassName?: string;
  textClassName?: string;
  className?: string;
}) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  function expandView() {
    setOpen(!open);
  }
  return (
    <div
      className={className || 'bg-white shadow-hdg py-2 px-4 rounded-lg group'}
    >
      <button
        className={
          titleClassName ||
          'grid grid-cols-[1fr,auto] gap-x-3 items-center w-full'
        }
        onClick={expandView}
      >
        {textClassName ? (
          <span className={open ? activeText : textClassName}>{title}</span>
        ) : (
          <span className={open ? text : activeText}>{title}</span>
        )}
        <Arrow className={open ? arrowDown : arrowUp} />
      </button>
      <div
        ref={contentEl}
        className="transition-all duration-300 ease overflow-hidden pr-10"
        style={
          open ? { height: contentEl.current?.scrollHeight } : { height: 0 }
        }
      >
        {content}
      </div>
    </div>
  );
};

export default Expandable;
