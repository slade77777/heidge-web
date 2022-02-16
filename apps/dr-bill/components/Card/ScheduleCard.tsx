import {Card, Text} from '@nextui-org/react';
import {Paragraph} from '../Text';

type Props = {
  title?: string;
  content?: string;
  tag?: string;
}

export default function ScheduleCard({title, content, tag}: Props) {
  return (
    <Card className="relative" shadow={false} css={{
      border: '1px solid $text',
      borderLeft: 0,
      borderRight: 0,
      borderRadius: 0,
      background: 'transparent',
    }}>
      <Text css={{lineHeight: '$md', fontWeight: 600}}>
        {title}
      </Text>
      <Paragraph>
        {content}
      </Paragraph>
      {!!tag &&
        <Text css={{
          fontSize: '$xs',
          lineHeight: '$sm',
          background: '$text',
          color: '$background',
          position: 'absolute',
          fontWeight: 400,
          top: 0,
          right: 0,
          padding: '10px 20px',
        }}>{tag}</Text>
      }
    </Card>
  )
}
