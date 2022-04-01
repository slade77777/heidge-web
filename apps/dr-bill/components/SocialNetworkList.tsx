import { Discord, Instagram, Twitter } from 'shared/icons';
import { classNames } from 'shared/utils';
import { Button } from '@nextui-org/react';

const socialNetworks = [
  {
    icon: <Discord className="h-5 w-5" />,
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    icon: <Instagram className="h-5 w-5" />,
  },
];

const SocialNetworkList = ({
  className,
  isSolid,
}: {
  className?: string;
  isSolid?: boolean;
}) => (
  <div className={classNames('flex flex-row gap-6 items-center', className)}>
    {socialNetworks.map((e, i) => (
      <a href={e.href} key={i} target="_blank" rel="noreferrer">
        {isSolid ? (
          <Button
            css={{
              padding: 0,
              minWidth: 50,
              height: 50,
              borderRadius: '100%',
              background: '$primary',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '$background',
            }}
          >
            {e.icon}
          </Button>
        ) : (
          e.icon
        )}
      </a>
    ))}
  </div>
);

export default SocialNetworkList;
