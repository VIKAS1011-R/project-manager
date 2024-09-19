import React from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

function StatsRightSideBar(){
    return(
        <div className="w-[22%] flex justify-end items-center ">
            <div className="h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col ">
                <Header/>
                <div className="flex flex-col gap-11 items-center justify-center mt-6">
                    <CircularChat/>
                    <ProjectsCompletedLabels/>
                </div>
                <ProjectList/>
            </div>
        </div>
    );
    function Header(){
        return(
            <h2 className="text-[22px] font-bold text-center mt-7 ">
                Projects Completed
            </h2>
        )
    }
    function CircularChat(){
        return(
            <div className="flex justify-center items-center">
                <div className="w-40 h-40 bg-slate-100 mt-5 rounded-full flex items-center justify-center">
                    <div className="w-[86%] flex justify-center items-center h-[86%] bg-white rounded-full">
                        <span className="text-xl font-semibold text-orange-600">75%</span>
                    </div>
                </div>
            </div>
        );
    }
    function ProjectsCompletedLabels(){
        return(
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="font-bold text-[17px]">3 completed</p>
                <p className="text-[13px] text-slate-400">20 tasks done</p>
            </div>
        );
    }
    function ProjectList(){
        return(
            <ul className="flex flex-col gap-3 mt-16 mx-4 overflow-auto">
                <SingleProject/>
                <hr className="w-[80%] mx-auto text-slate-100 opacity-50 " ></hr>
                <SingleProject/>
                <hr className="w-[80%] mx-auto text-slate-100 opacity-50 " ></hr>
                <SingleProject/>
            </ul>
        );
    }
    function SingleProject(){
        return(
            <li className="flex gap-2 p-3 items-center">
                <div className="w-8 h-8 bg-orange-600 rounded-md justify-center items-center flex text-slate-100 ">
                    <SplitscreenIcon sx={{ fontSize: "19px" }}/>
                </div>
                <ul>
                    <li className="text-[14px] font-semibold ">Project 1</li>
                    <li className="text-[13px] text-slate-400">Tasks</li>
                </ul>
            </li>
        );
    }
}



export default StatsRightSideBar;
