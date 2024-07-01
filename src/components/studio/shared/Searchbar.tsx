import React from "react";
import SearchIcon from "../icons/SearchIcon";

interface Props {
  className?: string;
}

const Searchbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex w-fit max-w-[60vw] bg-[#1C1E25]`}>
      <label
        htmlFor="search"
        className="p-2 sm:p-3 lg:p-4 flex justify-center items-center"
      >
        <SearchIcon className="size-3 lg:size-5" />
      </label>

      <input
        type="text"
        id="search"
        placeholder="Search for games..."
        className="px-4 py-2 w-full bg-transparent"
      />
    </div>
  );
};

export default Searchbar;
