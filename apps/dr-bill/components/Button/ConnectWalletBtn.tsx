import SquareBtn from './SquareBtn';

export default function ConnectWalletButton({css}: { css?: Object }) {
  return (
    <SquareBtn css={{
      width: '260px',
      height: '60px',
      ...css,
    }}> Connect Wallet </SquareBtn>
  )
}
