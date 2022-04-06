import { Card, Text } from '@nextui-org/react';
import { Paragraph } from './CustomText';
import CustomLink from './CustomLink';
import Tag from './Tag';

type Props = {
  title?: string;
  content?: string;
  tag?: string;
  href?: string;
  isExternal?: boolean;
};

export default function CardSchedule({
  title,
  content,
  tag,
  href,
  isExternal,
}: Props) {
  return (
    <Card
      className="relative"
      shadow={false}
      css={{
        border: '1px solid $text',
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        background: 'transparent',
      }}
    >
      <div>
        <CustomLink href={href} isExternalLink={isExternal}>
          <Text css={{ lineHeight: '$md', fontWeight: 600 }}>{title}</Text>
        </CustomLink>
        <Paragraph>{content}</Paragraph>
      </div>
      {!!tag && <Tag text={tag} />}
    </Card>
  );
}
