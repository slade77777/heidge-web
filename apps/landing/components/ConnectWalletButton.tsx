import React from "react";
import { Button } from "shared";
import { Connection, useMetamask } from "shared/wallet";

const ConnectWalletButton = () => {
  const { connection, connect, account } = useMetamask();
  return (
    <>
      <Button className="w-64 btn btn-cyan uppercase" onClick={connect}>
        {connection === Connection.NotConnected ? "Connect  wallet" : "mint"}
      </Button>
      <span>{account}</span>
    </>
  );
};

export default ConnectWalletButton;
