import React from "react";
import icons from "../ultis/icons";
import Search from "./Search";

const { AiOutlineArrowRight, AiOutlineArrowLeft } = icons;

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 w-full items-center">
        <div className="flex gap-6 text-gray-500">
          <span>
            <AiOutlineArrowLeft size={24} />
          </span>
          <span>
            <AiOutlineArrowRight size={24} />
          </span>
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Header;
