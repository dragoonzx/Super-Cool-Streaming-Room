import React from "react";
import { Link } from "react-router-dom";

function HeaderApp() {
  return (
    <header className="max-w-[95%] mx-auto px-4 pt-6 pb-2  flex justify-between items-center">
      <Link to="/">
        <div>Logo</div>
      </Link>
      <div>
        <button className="font-comic px-2 bg-white border-solid border-2 border-black shadow-[0_7px_#999] active:shadow-[0_4px_#666] active:translate-y-1">
          Connect wallet
        </button>
      </div>
    </header>
  );
}

export default HeaderApp;
