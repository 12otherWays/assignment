import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

function NoticeBoard() {
  let [expand, setExpand] = useState(false);
  function handleClick() {
    setExpand(() => !expand);
  }

  return (
    <div className="flex rounded-tl-xl rounded-bl-xl fixed top-24 right-0 noticeBoardDiv">
      <div className="h-full w-12 bg-black rounded-tl-lg rounded-bl-xl">
        <div className="h-full flex flex-col justify-between items-center w-full py-4 ">
          <div>
            {expand ? (
              <RxCross2 className="noticeBoardIcon" onClick={handleClick} />
            ) : (
              <AiOutlinePlus
                className="noticeBoardIcon"
                onClick={handleClick}
              />
            )}
          </div>
          <h1 className="text-white noticeBoardHeading">Notice Board</h1>
        </div>
      </div>
      <div
        className={
          expand
            ? "w-8 transition-all duration-75 ease-in"
            : "w-0 transition-all duration-75 ease-in"
        }
      ></div>
    </div>
  );
}

export default NoticeBoard;
