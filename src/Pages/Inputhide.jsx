import React, { useState } from "react";

const Inputhide = () => {
  const [refAddress, setRefAddress] = useState(
    "https://dapp.octasmart.asia?ref=0x0000000000000000000000000000000000000000"
  );
  const [isConnected, setIsConnected] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [noOfDirect, setNoOfDirect] = useState(0);
  return (
    <>
      <div>
        <input type="hidden" id="refaddress" value={refAddress} />
        <input type="hidden" id="hfisconnected" value={isConnected} />
        <input type="hidden" id="hfwalletaddress" value={walletAddress} />
        <input type="hidden" id="noofdirect" value={noOfDirect} />
      </div>
    </>
  );
};

export default Inputhide;
