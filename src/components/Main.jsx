import React from "react";
import { FaQuestion } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import Assets from "./Assets";

const style = {
  color: "white",
  height: "30px",
  width: "30px",
};
const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgb(43,106,235)",
  borderRadius: "50%",
  height: "60px",
  width: "60px",
  backgroundColor: "rgb(0,0,255)",
  margin: "6px 6px",
};

function Main() {
  return (
    <div className="main">
      <div className="cornerIcon">
        <div style={divStyle}>
          <FaQuestion style={style} />
        </div>
        <div style={divStyle}>
          <img
            src="https://blog.deepthought.education/wp-content/uploads/2022/08/discussion.svg"
            alt="abc"
          />
        </div>
        <div style={divStyle}>
          <TbCalendarTime style={style} />
        </div>
      </div>
      <button
        className=" text-white py-2 px-4 rounded-lg fixed top-24 right-48 text-xs"
        style={{ backgroundColor: "rgb(0,0,255)" }}
      >
        Submit Task
      </button>
      <div className="mt-24">
        <h1 className="heading">Technical Project Management</h1>
        <div className="box">
          <h3>Explore the world of management</h3>
          <p>
            As a project manager, you play an important role in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </p>
        </div>
      </div>
      <div className="assetContainer">
        <Assets />
      </div>
    </div>
  );
}

export default Main;
