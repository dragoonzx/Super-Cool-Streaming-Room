import React from "react";
import AnimatedPage from "../AnimatedPage";
import HeaderApp from "../HeaderApp";

function Home() {
  return (
    <>
      <HeaderApp />
      <AnimatedPage>
        <div className="container mx-auto">
          <span>App.</span>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Home;
