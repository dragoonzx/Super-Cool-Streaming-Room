import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="max-w-[95%] mx-auto px-4 py-2 flex justify-between items-center">
      <div>Logo</div>
      <div>
        <Link to="/app">
          <button>Launch app</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
