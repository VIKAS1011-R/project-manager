import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import ListIcon from "@mui/icons-material/List";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";
import CachedIcon from "@mui/icons-material/Cached";

function TasksList() {
  return (
    <div className="ml-12 mt-11 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      <div className="flex gap-2 text-orange-400 font-semibold">
        <span>On Going Task</span>
        <span className="bg-orange-600 text-white px-2 rounded-md">7</span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 px-2 rounded-md">8</span>
      </div>
    </div>
  );
}

function SingleTask(){
    return(
        <div className="flex gap-2 items-center">
            <Checkbox/>
            <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6 ">
                <div className="flex gap-3 items-center">
                    <div>
                        <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-self-center">
                            <ListIcon className="text-orange-600"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold hover:text-orange-600 cursor-pointer">
                            Create the UI design of the Task Manager
                        </span>
                        <div className="flex">
                            <span className="text-slate-400 text-[13px] p-[2px] ">
                                Project
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-36 font-bold items-center">
                    <div className="flex gap-2 items-center">
                        <CachedIcon className="text-slate-400 text-[24px]"/>
                        <span className="text-slate-400 text-[14px] ">In Progress</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <CircleIcon className="text-[10px] text-green-600"/>
                    <span className="text-[14px] text-slate-400">Low</span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-orange-200 hover:bg-orange-300 transition-all">
                        <EditOutlinedIcon className="text-orange-600" sx={{fontSize:"17px"}}/>
                    </div>
                    <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
                        <DeleteOutlineIcon className="text-slate-6s00" sx={{fontSize:"17px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TasksList;
