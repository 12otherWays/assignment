import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Article() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);

  function handleClick() {
    setFirst(!first);
  }
  function handleSecondClick() {
    setSecond(!second);
  }
  return (
    <div className="w-11/12">
      <div className="flex flex-col">
        <div className="flex flex-row mb-6 mt-2 ">
          <IoIosArrowDown
            style={{ height: "24px", width: "24px", marginRight: "4px" }}
            onClick={handleClick}
          />
          <h1 className="font-bold">Introduction</h1>
        </div>
        <p className={first ? "m-4 h-0 hidden " : "m-4"}>
          The 4SA Method, How to bring a idea into process?
        </p>
        <span
          className={
            first
              ? "font-medium place-self-end hidden"
              : "font-medium place-self-end"
          }
        >
          show less
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mb-6">
          <IoIosArrowDown
            style={{ height: "24px", width: "24px", marginRight: "4px" }}
            onClick={handleSecondClick}
          />
          <h1 className="font-bold">Thread A</h1>
        </div>
        <p className={second ? "m-7 h-0 hidden" : "m-7"}>
          How are you going to develop your strategy? Which method are you going
          to use to develop a strategy?What if the project is lengthy?
        </p>
        <span
          className={
            second
              ? "font-medium place-self-end hidden"
              : "font-medium place-self-end"
          }
        >
          show less
        </span>
      </div>
    </div>
  );
}

export default Article;
