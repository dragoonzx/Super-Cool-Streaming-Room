import React from "react";
import AnimatedPage from "../AnimatedPage";
import HeaderApp from "../HeaderApp";

function Home() {
  return (
    <>
      <HeaderApp />
      <AnimatedPage>
        <div className="container mx-auto mt-24 text-[#ff1f8f] text-[38px]">
          <div className="flex items-start">
            <div>
              <p>Live public room</p>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/p0xjzJTmYvk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <p>Chat</p>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Home;
