import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import data from "../data/data.json";

function Sidebar() {
  let [expand, setExpand] = useState(false);
  function handleClick() {
    setExpand(() => !expand);
  }

  return (
    <div
      className={
        expand
          ? "w-96 flex flex-col items-center rounded-xl transition-all duration-100 ease-in fixed top-20 bg-white"
          : "w-28 flex flex-col items-center rounded-xl transition-all duration-100 ease-in fixed top-20 bg-white"
      }
      style={{ height: "90vh", boxShadow: "1px 0px 10px black" }}
    >
      <div className="h-8 px-2 w-full flex flex-col justify-center items-end bg-black rounded-tr-lg">
        {expand ? (
          <div className="flex justify-between items-center w-full px-2">
            <h1 className="text-xl text-white">Journey Board</h1>
            <HiArrowCircleLeft
              style={{ height: "24px", width: "24px", color: "white" }}
              onClick={handleClick}
            />
          </div>
        ) : (
          <HiArrowCircleRight
            style={{ height: "24px", width: "24px", color: "white" }}
            onClick={handleClick}
          />
        )}
      </div>
      <div>
        {expand ? (
          <div className="mt-6 ">
            <ul className="list-inside">
              <li className="font-semibold list-disc">
                {data.tasks[0].task_title}
              </li>
              <ul>
                {data.tasks[0].assets.map((ele, index) => {
                  return (
                    <li key={index} className="list-disc">
                      {ele.asset_title}
                    </li>
                  );
                })}
              </ul>
            </ul>
          </div>
        ) : (
          <button
            className=" text-white font-bold py-3 px-5 rounded-xl mt-6"
            style={{ backgroundColor: "rgb(0,0,225)" }}
          >
            1
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
