import React from "react";
import SplictscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVerticon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

function SingleProjectCard() {
  return (
    <li className="w-[30%] flex flex-col gap-8 rounded-lg p-7 bg-white border border-slate-300">
      <ProjectCardheader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </li>
  );
  function ProjectCardheader() {
    return (
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md">
            <SplictscreenIcon sx={{ fontSize: "22px" }} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[19px]">Project Title</span>
            <span className="text-slate-400 text-[13px]">2 days ago</span>
          </div>
        </div>
        <div>
          <MoreVerticon className="text-slate-400 text-[19px] cursor-pointer" />
        </div>
      </div>
    );
  }
}

function ProjectCardBody() {
  return (
    <ul className="text-slate-400 border text-[13px] flex flex-col gap-2 ml-3">
      <li className="flex gap-2 items-center">
        <CircleIcon className="text-[8px]" />
        <span>Task 1</span>
      </li>
      <li className="flex gap-2 items-center">
        <CircleIcon className="text-[8px]" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, rem?
        </span>
      </li>
    </ul>
  );
}
function ProjectCardFooter() {
  return (
    <div className="flex gap-4 flex-col mt-2">
      <div className="text-[12px] gap-3 items-center flex w-full">
        <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
          <div className="w-1/2 bg-orange-600 h-full rounded-r-xl"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[13px] text-slate-400">On Progress</p>
        <div className="flex gap-1 text-[13px]">
          <p>78%</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProjectCard;
