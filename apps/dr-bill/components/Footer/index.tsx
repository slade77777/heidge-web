import {Container, Text} from '@nextui-org/react';
import Subscribe from './Subscribe';
import SocialNetworkList from './SocialNetworkList';

export default function Footer() {
  return (
    <div className="bg-[#0000000d] border-t border-t-[#00000038]">
      <Container
        xl
        css={{
          height: '437px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div className="w-[335px]">
          <SocialNetworkList className="mb-5 w-full"/>
          <Text
            css={{
              fontSize: '$tiny',
              lineHeight: '32px',
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Have a question? Hit us up on Discord
            or Twitter!
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
        <div className="w-[335px]">
          <Text
            css={{
              lineHeight: '35.2px',
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Leave your email to be informed of exhibits, drops and other goodies.
          </Text>
          <Subscribe className="w-[306px]"/>
        </div>
      </Container>
    </div>
  )
}
