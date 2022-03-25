import { ReactNode } from 'react';
import Link from 'next/link';

const CustomLink = ({
  children,
  isExternalLink,
  href,
}: {
  children: ReactNode;
  isExternalLink?: boolean;
  href?: string;
}) => {
  if (isExternalLink && href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  } else if (!isExternalLink && href) {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }
  return <>{children}</>;
};

export default CustomLink;
