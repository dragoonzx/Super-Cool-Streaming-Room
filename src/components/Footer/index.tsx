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
          <img src={lens} alt="lens" className="mr-8 h-full" />
          <img src={polygon} className="h-full" alt="polygon" />
        </div>
      </div>
      <div>
        <img src={github} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
