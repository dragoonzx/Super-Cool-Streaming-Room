import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Logo from "../Logo";
import { state } from "../../state";
import { useSnapshot } from "valtio";

function HeaderApp() {
  const stateSnap = useSnapshot(state);

  const connectWallet = async () => {
    const providerOptions = {
      /* See Provider Options Section */
    };

    try {
      const web3Modal = new Web3Modal({
        providerOptions, // required
      });
      const instance = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      state.provider = provider;
      state.signer = signer;
      state.user = await signer.getAddress();
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const formattedEthAddress = useCallback(() => {
    const address = state.user;

    if (!address) {
      return;
    }

    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [state.user]);

  return (
    <header className="max-w-[95%] mx-auto px-4 py-2 flex justify-between items-center">
      <Logo />
      <div>
        {stateSnap.user ? (
          <div className="flex items-center">
            <p className="mr-4">{formattedEthAddress()}</p>
            <button className="font-comic px-2 bg-white border-solid border-2 border-black shadow-[0_7px_#999] active:shadow-[0_4px_#666] active:translate-y-1">
              Submit post
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="font-comic px-2 bg-white border-solid border-2 border-black shadow-[0_7px_#999] active:shadow-[0_4px_#666] active:translate-y-1"
          >
            Connect wallet
          </button>
        )}
      </div>
    </header>
  );
}

export default HeaderApp;
