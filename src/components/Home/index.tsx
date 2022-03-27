import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import videoLand from "../../assets/video/video_landing.mp4";
import watchDiscuss from "../../assets/images/watchDiscuss.png";
import whenYouWanna from "../../assets/images/whenYouWanna.png";
import videoFrame from "../../assets/images/videoFrame.png";
import arrow from "../../assets/images/arrow.png";
import network from "../../assets/images/network.png";
import grow from "../../assets/images/grow.png";

import { useInView } from "react-intersection-observer";
import Footer from "../Footer";
import AnimatedPage from "../AnimatedPage";

import ForceGraph3D from "react-force-graph-3d";
import TvSvg from "../AnimatedSvg/tvSvg";
import { ping } from "../../api/ping";

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
      width={500}
      backgroundColor="#ffff89"
      showNavInfo={false}
      nodeLabel="id"
      nodeAutoColorBy="group"
    />
  );
};

const FEATURES_LIST = {
  watch: "Collaborative content watching and discussion",
  network: "See what others like and comment",
  grow: "Grow over your data",
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

  const [feature, setFeature] = useState<"watch" | "network" | "grow">("watch");

  return (
    <>
      <div className="home-bg absolute top-0 left-0 w-screen h-screen -z-10" />
      <Header />
      <AnimatedPage>
        <div className="container mx-auto text-[#ff1f8f]">
          <div
            ref={ref}
            className="flex items-center justify-between px-8"
            style={{ minHeight: "calc(100vh - 112px - 64px)" }}
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
          <div className="mt-36 text-[38px]">
            <p className="max-w-[70%]">
              Community TV Channel where everyone can post (stream), like and
              comment
            </p>
            <p className="mt-8 max-w-[70%]">What makes it special?</p>
            <div className="flex items-end justify-between mt-8">
              <div
                onClick={() => setFeature("watch")}
                className="flex flex-col items-center cursor-pointer"
              >
                <TvSvg />
                <p className="mt-4">Watch.</p>
              </div>
              <div
                onClick={() => setFeature("network")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img src={network} alt="" />
                <p className="mt-4">Network.</p>
              </div>
              <div
                onClick={() => setFeature("grow")}
                className="flex flex-col items-center cursor-pointer"
              >
                <img src={grow} alt="" />
                <p className="mt-4">Grow.</p>
              </div>
            </div>
            <div className="p-8 border-2 text-[24px] border-solid border-black rounded-md mt-8">
              {FEATURES_LIST[feature]}
            </div>
          </div>
          <div className="mt-24 text-[38px]">
            <p className="max-w-[70%]">Media data insights always with you</p>
            <div className="flex justify-center">
              <FocusGraph />
            </div>
            <p className="max-w-[70%]">
              See what content your peers like, watch our infographics, make
              better choices
            </p>
          </div>
          <div className="mt-24">
            <span className="super-cool">Or just chill and watch</span>
          </div>
          <div className="mt-36 text-[38px]">
            <p>Roadmap (Q2 - Q3 2022)</p>
            <div className="flex items-center justify-between text-[24px] mt-4">
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
