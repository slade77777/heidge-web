import {Discord, Instagram, Twitter} from 'shared/icons';
import {classNames} from 'shared/utils';
import {Button} from '@nextui-org/react';

const socialNetworks = [
  {
    icon: <Discord className="h-5 w-5"/>,
  },
  {
    icon: <Twitter className="h-5 w-5"/>,
  },
  {
    icon: <Instagram className="h-5 w-5"/>,
  },
]

export default function SocialNetworkList({className}: { className?: string }) {
  return (
    <div className={classNames('flex flex-row gap-6 items-center', className)}>
      {socialNetworks.map((e, i) =>
        <Button
          key={i}
          css={{
            padding: 0,
            minWidth: '50px',
            height: '50px',
            borderRadius: '100%',
            background: '$primary',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '$background',
          }}
        >
          {e.icon}
        </Button>,
      )}
    </div>
  )
}
