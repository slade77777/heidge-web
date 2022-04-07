import SquareBtn from './SquareBtn';
import { CSS, Text, useTheme } from '@nextui-org/react';
import { useMetamask } from 'shared';
import { Wallet } from 'shared/icons';
import { classNames, getShortWalletAddress } from 'shared/utils';
import ExternalLink from '../ExternalLink';
import useDeepLink from '../../hooks/useDeepLink';

const WalletButton = ({
  css,
  className,
  onClick,
}: {
  css?: CSS;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={className}>
      <SquareBtn
        onClick={onClick}
        css={{
          width: 220,
          height: 56,
          ...css,
        }}
      >
        <Text css={{ fontSize: '$base', fontWeight: 600 }}>
          Connect Wallet{' '}
        </Text>
      </SquareBtn>
    </div>
  );
};

export default function ConnectWalletButton({ css }: { css?: CSS }) {
  const { account, connect } = useMetamask();
  const deepLink = useDeepLink();
  const { isDark } = useTheme();

  if (account) {
    return (
      <div
        className={classNames(
          'flex space-x-1 items-center rounded-full px-3 py-1',
          isDark ? 'bg-[#EDEAE2]/30' : 'bg-[#EDEAE2]',
        )}
      >
        <Wallet className="h-5 dark:text-red-400" />
        <Text
          className="pt-1 text-sm"
          css={{
            color: '$primary',
          }}
        >
          {getShortWalletAddress(account)}
        </Text>
      </div>
    );
  }

  return (
    <>
      <WalletButton css={css} className="hidden lg:block" onClick={connect} />
      <ExternalLink href={deepLink} className="lg:hidden">
        <WalletButton css={css} />
      </ExternalLink>
    </>
  );
}
