import React from "react";
import { BsFillHouseFill, BsFillBellFill } from "react-icons/bs";
import { FaBinoculars, FaTools } from "react-icons/fa";
import { BiUser, BiDotsVerticalRounded } from "react-icons/bi";

const style = {
  color: "white",
  height: "16px",
  width: "16px",
};
const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgb(43,106,235)",
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  backgroundColor: "rgb(43,106,235)",
  margin: "2px 6px",
};

function Header() {
  return (
    <div
      className="flex h-20 px-24 py-6 justify-between items-center fixed w-full top-0"
      style={{ backgroundColor: "rgb(236,236,236)" }}
    >
      <div className="icon">
        <img
          className="h-11"
          src="https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex items-center justify-center">
        <div style={divStyle}>
          <BsFillHouseFill style={style} />
        </div>
        <div style={divStyle}>
          <FaBinoculars style={style} />
        </div>
        <div style={divStyle}>
          <FaTools style={style} />
        </div>
        <div style={divStyle}>
          <BsFillBellFill style={style} />
        </div>
        <div style={divStyle}>
          <BiUser style={style} />
        </div>
        <BiDotsVerticalRounded
          style={{ color: "rgb(43,106,235)", height: "26px", width: "26px" }}
        />
      </div>
    </div>
  );
}

export default Header;
