import CustomLink from './CustomLink';
import { ReactNode } from 'react';
import { Heading, Paragraph } from './CustomText';
import { CSS } from '@nextui-org/react';
import Tag from './Tag';

function Card({
  children,
  href,
  isExternalLink,
  tag,
}: {
  href?: string;
  tag?: string;
  isExternalLink?: boolean;
  children: ReactNode;
}) {
  return (
    <CustomLink href={href} isExternalLink={isExternalLink}>
      <div className="border border-black relative">
        <div>{children}</div>
        {!!tag && <Tag text={tag} />}
      </div>
    </CustomLink>
  );
}

export const CardBody = ({ children, css }: { children: ReactNode; css?: CSS }) => {
  return <Paragraph css={{ padding: '0 1rem 1rem', ...css }}>{children}</Paragraph>;
};

export const CardTitle = ({ children, css }: { children: ReactNode; css?: CSS }) => {
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
        ...css
      }}
    >
      {children}
    </Heading>
  );
};

Card.CardTitle = CardTitle;
Card.CardBody = CardBody;

export default Card;
