import React from "react";
import SingleProjectCard from "./SingleProjectCard";

function AllProjectsSection(){
    return(
        <ul className="flex h-[78%] overflow-auto gap-4 flex-wrap mt-6">
            <SingleProjectCard/>
            <SingleProjectCard/>
            <SingleProjectCard/>
            <SingleProjectCard/>
            <SingleProjectCard/>
        </ul>
    );
}

export default AllProjectsSection;
