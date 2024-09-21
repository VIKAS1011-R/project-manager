import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ProjectsSubHeader(){
    return(
        <div className="mt-20 max-lg:mt-6  flex justify-between font-bold items-center">
            <MyProjectsText/>
            <SortByButton/>
        </div>
    );
    function MyProjectsText(){
        return <p className="text-[26px] font-bold max-sm:text-[23px]">My Projects</p>
    }
    function SortByButton(){
        return(
            <div className="flex text-[15px] font-semibold gap-3 max-sm:gap-1 max-sm:text-[14px]">
                <span className="text-slate-300">Sort By</span>
                <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-slate-800">Recent Projects</span>
                    <KeyboardArrowDownIcon sx={{fontSize:"19px"}}/>
                </div>
            </div>
        );
    }
}


export default ProjectsSubHeader;