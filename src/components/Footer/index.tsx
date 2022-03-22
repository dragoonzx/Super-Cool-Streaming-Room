import React from "react";
import lens from "../../assets/images/lens.png";
import polygon from "../../assets/images/polygon.png";
import github from "../../assets/images/github.png";

const Footer = () => {
  return (
    <footer className="max-w-[95%] mx-auto px-4 flex justify-between items-center py-12 text-[#ff1f8f]">
      <div>
        <p className=" opacity-60 uppercase">Powered by</p>
        <div className="flex items-center h-20 mt-4">
          <a
            href="https://lens.dev/"
            target="_blank"
            rel="noreferrer"
            className="h-full"
          >
            <img src={lens} alt="lens" className="mr-8 h-full" />
          </a>
          <a
            href="https://polygon.technology/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={polygon} className="h-12" alt="polygon" />
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/dragoonzx/Super-Cool-Streaming-Room"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" className="h-24" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
