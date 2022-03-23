import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import videoLand from "../../assets/video/video_landing.mp4";
import watchDiscuss from "../../assets/images/watchDiscuss.png";
import whenYouWanna from "../../assets/images/whenYouWanna.png";
import videoFrame from "../../assets/images/videoFrame.png";
import arrow from "../../assets/images/arrow.png";

import { useInView } from "react-intersection-observer";
import Footer from "../Footer";
import AnimatedPage from "../AnimatedPage";

import ForceGraph3D from "react-force-graph-3d";

const FocusGraph = () => {
  const fgRef = useRef<any>();

  const [data, setData] = useState<any>();

  const addData = async () => {
    const rData = (await import("./miserables.json")).default;
    console.log(rData);
    setData(rData);
  };

  const addBloomEffect = async () => {
    // const UnrealBloomPassPromise = await import(
    //   // @ts-ignore
    //   "//cdn.skypack.dev/three@0.136/examples/jsm/postprocessing/UnrealBloomPass.js"
    // ).then((m) => m.UnrealBloomPass);
    // const bloomPass = new UnrealBloomPassPromise();
    // bloomPass.strength = 3;
    // bloomPass.radius = 1;
    // bloomPass.threshold = 0.1;
    // fgRef?.current && fgRef.current.postProcessingComposer().addPass(bloomPass);
  };

  useEffect(() => {
    console.log("add");
    addData();
    addBloomEffect();
  }, []);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      height={300}
      backgroundColor="rgba(0,0,0,0)"
      showNavInfo={false}
      nodeLabel="id"
      nodeAutoColorBy="group"
    />
  );
};

function Home() {
  const frontVideoRef = useRef<HTMLVideoElement | null>(null);
  const backVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "90px",
  });

  const handleInteractive = () => {
    setIsInteractive(!isInteractive);
  };

  useEffect(() => {
    if (frontVideoRef?.current && backVideoRef?.current) {
      const curTime = frontVideoRef?.current.currentTime;
      backVideoRef.current.currentTime = curTime;
    }
  }, [frontVideoRef, backVideoRef, isInteractive]);

  useEffect(() => {
    if (!inView) {
      setIsInteractive(false);
    }
  }, [inView]);

  return (
    <>
      <Header />
      <AnimatedPage>
        <div className="container mx-auto text-[#ff1f8f]">
          <div
            ref={ref}
            className="flex items-center justify-between mt-16 px-8"
          >
            <span className="flex basis-1/2 super-cool">
              Share content together. Live.
            </span>
            {isInteractive && (
              <video
                className=" object-cover absolute w-screen h-screen top-0 left-0 -z-10"
                ref={backVideoRef}
                src={videoLand}
                muted
                playsInline
                autoPlay
                loop
              />
            )}
            <div
              onClick={handleInteractive}
              className="flex flex-col basis-1/4 mr-24 relative cursor-pointer"
            >
              <video
                ref={frontVideoRef}
                className=""
                src={videoLand}
                muted={!isInteractive}
                playsInline
                autoPlay
                loop
              />
              <img
                src={videoFrame}
                alt=""
                className="absolute h-full top-0 -z-[5] left-0 scale-105"
              />
              <img
                src={watchDiscuss}
                alt=""
                className="absolute -top-[36px] left-1/2 -translate-x-1/2 h-[72px]"
              />
              <img
                src={whenYouWanna}
                alt=""
                className="absolute top-[70px] h-[92px] right-0 -mr-[28%]"
              />
              <p className="absolute bottom-0 left-0 text-[#ff1f8f] bg-black">
                Click to mute/unmute
              </p>
            </div>
          </div>
          <div className="mt-36 text-[38px] max-w-[70%]">
            <p>
              Community TV Channel where everyone can post (stream), like and
              comment
            </p>
            <p className="mt-8">What makes it special?</p>
            <p className="mt-8">web3 & lens</p>
            <p>1 - 2 - 3</p>
          </div>
          <div className="mt-36 text-[38px] max-w-[70%]">
            <p>Media data insights always with you</p>
            <div>{/* <FocusGraph /> */}</div>
            <p>
              See what content your peers like, watch our infographics, make
              better choices
            </p>
          </div>
          <div className="mt-24">
            <span className="super-cool">Or just chill and watch</span>
          </div>
          <div className="mt-36 text-[38px] max-w-[70%]">
            <p>Roadmap</p>
            <div className="flex items-center text-[24px] mt-4">
              <p className="mr-4">Private rooms</p>
              <img src={arrow} alt="" className="mr-4" />
              <p className="mr-4">PRO media analytics dashboard</p>
              <img
                src={arrow}
                alt=""
                className="mr-4"
                style={{ transform: "rotateX(180deg)" }}
              />
              <p>Web3 content notifications</p>
            </div>
          </div>
        </div>
      </AnimatedPage>
      <Footer />
    </>
  );
}

export default Home;
