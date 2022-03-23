import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Header() {
  return (
    <header className="max-w-[95%] mx-auto px-4 py-2 flex justify-between items-center">
      <Logo />
      <div>
        <Link to="/app">
          <button className="font-comic px-2 bg-white border-solid border-2 border-black shadow-[0_7px_#999] active:shadow-[0_4px_#666] active:translate-y-1">
            Launch app
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
