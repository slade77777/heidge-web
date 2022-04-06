import CustomLink from './CustomLink';
import { ReactNode } from 'react';
import { Heading, Paragraph } from './CustomText';
import { useTheme } from '@nextui-org/react';

function Card({
  children,
  href,
  isExternalLink,
}: {
  href?: string;
  tag?: string;
  isExternalLink?: boolean;
  children: ReactNode;
}) {
  const { isDark } = useTheme();
  return (
    <CustomLink href={href} isExternalLink={isExternalLink}>
      <div className={isDark ? 'border border-white relative' : 'border border-black relative'}>
        {children}
      </div>
    </CustomLink>
  );
}

export const CardBody = ({ children }: { children: ReactNode }) => {
  return <Paragraph css={{ padding: '0 1rem 1rem' }}>{children}</Paragraph>;
};

export const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Heading
      css={{
        overflow: 'hidden',
        padding: '1rem',
        '@xs': {
          fontSize: '$lg',
          lineHeight: '$lg',
        },
        '@sm': {
          fontSize: '$sm',
          lineHeight: '$md',
        },
      }}
    >
      {children}
    </Heading>
  );
};

Card.CardTitle = CardTitle;
Card.CardBody = CardBody;

export default Card;
