import React, { useState } from "react";
import data from "../data/data.json";
import { FaInfoCircle } from "react-icons/fa";

const style = {
  color: "white",
  height: "20px",
  width: "20px",
};

function Asset() {
  let boolValue = {};
  data.tasks[0].assets.map((ele, index) => (boolValue[index] = true));

  const [expand, setExpand] = useState(boolValue);

  const handleClick = (index) => () => {
    setExpand((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <>
      {data.tasks[0].assets.map((element, index) => (
        <div
          key={index}
          className="assets rounded-2xl overflow-hidden m-4"
          style={{ width: "540px", boxShadow: "-1px 0px 10px black" }}
        >
          <div className="flex px-4 bg-black text-white items-center justify-between">
            <h1 className="w-11/12 flex justify-center py-2 text-lg tracking-wider">
              {element.asset_title}
            </h1>
            <FaInfoCircle onClick={handleClick(index)} style={style} />
          </div>
          <div
            className={
              expand[index]
                ? "p-6 border-b-2 transition-all duration-100 ease-in "
                : "px-6 invisible h-0 transition-all duration-100 ease-in "
            }
          >
            <span className="font-bold">Description : </span>
            {element.asset_description}
          </div>
          <div className="h-72 flex justify-center items-center">content</div>
          <div className="h-20"></div>
        </div>
      ))}
    </>
  );
}

export default Asset;
