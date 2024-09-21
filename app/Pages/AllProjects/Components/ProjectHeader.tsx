import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";

function ProjectHeader() {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
  function SearchBar() {
    return (
      <div className="flex items-center ">
        <div className="border-b-2 border-orange-600 h-[39px] w-11 justify-center flex items-center">
          <SearchIcon
            className="text-slate-400 outline-none"
            sx={{ fontSize: "26px" }}
          />
        </div>

        <div className="border-b-2 border-slate-200 w-[67%]">
          <input
            placeholder="Search a project . . ."
            className="p-2 bg-transparent text-[14px] outline-none"
          />
        </div>
      </div>
    );
  }

  function AddProjectButton() {
    return (
      <div className="flex gap-3 items-center ">
        <button className="flex items-center bg-orange-600 text-white px-2 pr-3 text-[14px] gap-1 rounded-md p-2 max-sm:pr-2">
          <AddIcon sx={{ fontSize: "22px" }} className="mt-[2px]" />
          <span className="max-sm:hidden" >New Project</span>
        </button>
        <MenuIcon className="text-slate-400 cursor-pointer hidden max-sm:block" />
      </div>
    );
  }
}

export default ProjectHeader;
