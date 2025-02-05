import React from "react";
import icons from "../ultis/icons";

const { IoMdSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center">
      <span className="h-10 pl-4 flex  bg-[#DDE4E4] items-center rounded-l-[20px] justify-center text-gray-500">
        <IoMdSearch size={24} />
      </span>
      <input
        type={Text}
        className="outline-none px-4  bg-[#DDE4E4] py-2 w-full rounded-r-[20px] h-10 text-gray-500"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
