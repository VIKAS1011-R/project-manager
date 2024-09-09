import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

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

        <div className="border-b-2 vorder-slate-200">
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
        <button className="flex items-center bg-orange-600 text-white px-2 pr-3 text-[14px] gap-1 rounded-md">
            <AddIcon sx={{fontSize:"22px"}} className="mt-[2px]" />
            <span>New Project</span>
        </button>
        );
    }
}

export default ProjectHeader;