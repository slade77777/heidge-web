import { Button } from 'shared';
import { scrollToEl } from 'shared/utils';

const BuyYourHedgie = () => {
  function scrollToMintButton() {
    scrollToEl('mint-box', -50);
  }
  return (
    <div className="text-center bg-slate-100 py-10">
      <h4 className="text-fuchsia-900 font-semibold py-3">Ready?</h4>
      <Button
        onClick={scrollToMintButton}
        className="btn btn-cyan uppercase px-8 leading-5"
      >
        Buy your Hedgie
      </Button>
    </div>
  );
};

export default BuyYourHedgie;
