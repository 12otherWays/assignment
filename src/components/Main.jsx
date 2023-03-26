import React from "react";

import { FaQuestion } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";

import Assets from "./Assets";

import data from "../data/data.json";

function Main() {
  return (
    <div className="main">
      {/* cornerIcon */}
      <div className="cornerIcon">
        <div className="mainIconDiv">
          <FaQuestion className="mainIcon" />
        </div>
        <div className="mainIconDiv">
          <img
            src="https://blog.deepthought.education/wp-content/uploads/2022/08/discussion.svg"
            alt="abc"
          />
        </div>
        <div className="mainIconDiv">
          <TbCalendarTime className="mainIcon" />
        </div>
      </div>
      {/* submit button */}
      <button className=" text-white py-2 px-4 rounded-lg fixed top-24 right-48 text-xs sub-btn">
        Submit Task
      </button>

      {/* heading and para */}
      <div className="mt-24">
        <h1 className="heading">Technical Project Management</h1>
        <div className="box">
          <h3>{data.tasks[0].task_title}</h3>
          <p>{data.tasks[0].task_description}</p>
        </div>
      </div>

      {/* assets */}
      <div className="assetContainer">
        <Assets />
      </div>
    </div>
  );
}

export default Main;
