import { useState } from 'react';
import { Button, Container, Input, Text } from '@nextui-org/react';
import { Discord, Instagram, Twitter } from 'shared/icons';
import { classNames } from 'shared/utils';
import { toast } from 'shared';

const socialNetworks = [
  {
    icon: <Discord className="h-5 w-5" />,
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    icon: <Instagram className="h-5 w-5" />,
  },
];

const SocialNetworkList = ({ className }: { className?: string }) => (
  <div className={classNames('flex flex-row gap-6 items-center', className)}>
    {socialNetworks.map((e, i) => (
      <a href={e.href} key={i} target="_blank" rel="noreferrer">
        <Button
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
        </Button>
      </a>
    ))}
  </div>
);

const Subscribe = ({ className }) => {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      fetch('/api/subscription', {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
      })
        .then((res) => {
          if (res.ok) {
            toast.success('Your email have been subscribed successfully');
            setEmail('');
          }
        })
        .catch((err) => {
          toast.error('Error');
        });
    }
  }
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter Your Email..."
          color="success"
          fullWidth
          animated={false}
          rounded={false}
          onChange={handleChange}
          required
          value={email}
          type="email"
          css={{
            label: {
              height: '54px',
              background: 'transparent',
              borderRadius: 0,
              border: '1px solid $primary',
              boxSizing: 'border-box',
            },
            input: {
              fontSize: '$xs',
              lineHeight: '30.6px',
              fontWeight: 300,
              color: '$primary',
            },
            'input::placeholder': {
              color: '$primary',
            },
            'input:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
        <Button
          type="submit"
          css={{
            background: '$primary',
            height: '54px',
            width: '100%',
            marginTop: '7px',
            borderRadius: 0,
          }}
        >
          <Text
            css={{
              lineHeight: '34px',
              fontWeight: 600,
              color: '$background',
            }}
          >
            Subscribe
          </Text>
        </Button>
      </form>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="bg-[#0000000d] border-t border-t-[#00000038]">
      <Container
        md
        css={{
          // height: '437px',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '60px',
          '@xs': {
            flexDirection: 'row',
            paddingTop: '120px',
            alignItems: 'flex-start',
          },
        }}
      >
        <div className="w-full md:w-[335px]">
          <Text
            css={{
              lineHeight: '35.2px',
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Leave your email to be informed of exhibits, drops and other
            goodies.
          </Text>
          <Subscribe className="w-full md:max-w-[306px] mx-auto mb-[50px]" />
        </div>
        <div className="w-full md:w-[335px] md:order-first">
          <SocialNetworkList className="mb-5 w-full" />
          <Text
            css={{
              lineHeight: '32px',
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Have a question? Hit us up on Discord or Twitter!
          </Text>
          <Text
            css={{
              lineHeight: '34px',
              fontWeight: 600,
            }}
          >
            © Copyright 1969-2022
          </Text>
        </div>
      </Container>
    </div>
  );
}
