import { Discord, Instagram, Twitter } from 'shared/icons';
import { classNames } from 'shared/utils';
import { Button } from '@nextui-org/react';
import { ReactNode } from 'react';

const socialNetworks = [
  {
    icon: <Discord className="h-5 w-5" />,
    href: process.env.NEXT_PUBLIC_DISCORD,
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: process.env.NEXT_PUBLIC_INSTAGRAM,
  },
];

const SocialNetworkList = ({
  className,
  isSolid,
  children,
}: {
  className?: string;
  isSolid?: boolean;
  children?: ReactNode;
}) =>
  !socialNetworks.filter((item) => !!item.href).length ? null : (
    <>
      <div
        className={classNames(
          'flex flex-col justify-center relative',
          className,
        )}
      >
        <div className="flex flex-row items-center gap-6">
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
      </div>
      {children}
    </>
  );

export default SocialNetworkList;
