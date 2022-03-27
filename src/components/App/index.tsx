import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { queue } from "../../state";
import AnimatedPage from "../AnimatedPage";
import HeaderApp from "../HeaderApp";

function App() {
  const queueSnap = useSnapshot(queue);

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    {
      id: "0x",
      value: "Super good!",
    },
  ]);

  const submitComment = () => {
    if (!comment) {
      return;
    }

    setComments([
      ...comments,
      {
        id: "0x1",
        value: comment,
      },
    ]);
    setComment("");
  };

  return (
    <>
      <HeaderApp />
      <AnimatedPage>
        <div className="container mx-auto mt-12 text-[#ff1f8f] text-[38px]">
          <div className="flex items-start justify-between">
            <div className="mr-4">
              <p>Live public room</p>
              <div className="border-solid border-2 border-black p-4">
                <iframe
                  width="720"
                  height="420"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mr-24">
              <p>Comments</p>
              <div className=" border-solid border-2 border-black w-[330px] h-[456px] overflow-auto flex flex-col justify-between">
                <ul className="p-2">
                  {comments.map((v) => (
                    <li
                      key={v.id + v.value}
                      className="text-black text-[16px] flex items-center mb-2"
                    >
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#ff1f8f] mr-2" />
                      {v.value}
                    </li>
                  ))}
                </ul>
                <div className="p-2 flex flex-col">
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="text-[14px] p-4 mb-2 h-8"
                    type="text"
                    placeholder="i like it!"
                  />
                  <button
                    onClick={() => submitComment()}
                    className="font-comic px-2 mb-2 bg-white border-solid text-[16px] text-black border-2 border-black shadow-[0_7px_#999] active:shadow-[0_4px_#666] active:translate-y-1"
                  >
                    Submit comment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p>Queue</p>
            <div className="p-4 overflow-auto max-h-[200px] border-solid border-2 border-black">
              <ul>
                {queueSnap.value.map((v, i) => (
                  <li
                    key={v.title + i}
                    className="text-[16px] text-black flex justify-between items-center mb-2"
                  >
                    <p>{v.title}</p>
                    <div className="flex items-center">
                      <p className="mr-4">{v.duration}</p>
                      <p>{v.priority}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-8"></div>
          {/* <div className="mt-16">
            <p>Live data insights</p>
            <div className="mt-4"></div>
          </div> */}
        </div>
      </AnimatedPage>
    </>
  );
}

export default App;
