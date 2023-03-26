import React from "react";
import { BsFillHouseFill, BsFillBellFill } from "react-icons/bs";
import { FaBinoculars, FaTools } from "react-icons/fa";
import { BiUser, BiDotsVerticalRounded } from "react-icons/bi";

function Header() {
  return (
    <div className="flex h-20 px-24 py-6 justify-between items-center fixed w-full top-0 headerDiv">
      <div className="icon">
        <img
          className="h-11"
          src="https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="headerIconDiv">
          <BsFillHouseFill className="headerIcon" />
        </div>
        <div className="headerIconDiv">
          <FaBinoculars className="headerIcon" />
        </div>
        <div className="headerIconDiv">
          <FaTools className="headerIcon" />
        </div>
        <div className="headerIconDiv">
          <BsFillBellFill className="headerIcon" />
        </div>
        <div className="headerIconDiv">
          <BiUser className="headerIcon" />
        </div>
        <BiDotsVerticalRounded className="last-icon" />
      </div>
    </div>
  );
}

export default Header;
