import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Logo from "../Logo";
import { queue, state } from "../../state";
import { useSnapshot } from "valtio";
import { Dialog } from "@headlessui/react";

function HeaderApp() {
  const [isOpen, setIsOpen] = useState(false);

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

  const [link, setLink] = useState("");
  const [bounty, setBounty] = useState("");

  const handlePostSubmit = () => {
    queue.value = [
      {
        title: link,
        duration: "3:00m",
        priority: bounty + " MATIC",
      },
      ...queue.value,
    ];
    setIsOpen(false);
  };

  return (
    <>
      <header className="max-w-[95%] mx-auto px-4 py-6 flex justify-between items-center">
        <Logo />
        <div>
          {stateSnap.user ? (
            <div className="flex items-center">
              <p className="mr-4">{formattedEthAddress()}</p>
              <button
                onClick={() => setIsOpen(true)}
                className="font-comic px-2 bg-white border-solid border-2 border-black shadow-[0_7px_#999] active:shadow-[0_4px_#666] active:translate-y-1"
              >
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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0 " />

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <Dialog.Title>Submit post</Dialog.Title>
          <Dialog.Description className="text-[12px]">
            Insert link to post and choose bounty
          </Dialog.Description>

          <div className="flex flex-col mt-4">
            <label>
              Link
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text"
                placeholder="https://cdn.livepeer.com/..."
                className="mb-4 ml-2"
              />
            </label>
            <label>
              Bounty
              <input
                value={bounty}
                onChange={(e) => setBounty(e.target.value)}
                type="number"
                placeholder="0.001 MATIC"
                className="mb-4 ml-2"
              />
            </label>

            <div className="mb-4">
              <button
                className="mr-2 border-2 p-2"
                onClick={() => handlePostSubmit()}
              >
                Submit
              </button>
              <button className="border-2 p-2" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default HeaderApp;
