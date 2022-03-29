import { useState } from 'react';
import { Button, Container, Text } from '@nextui-org/react';
import { toast } from 'shared';
import SocialNetworkList from './SocialNetworkList';

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
        <input
          placeholder="Enter your email..."
          color="success"
          onChange={handleChange}
          required
          className="px-3 py-2 w-full"
          value={email}
          type="email"
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
          <SocialNetworkList className="mb-5 w-full" isSolid />
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
