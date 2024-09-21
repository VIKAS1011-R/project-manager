import AllProjectsSection from "./Components/AllProjectsSection";
import ProjectHeader from "./Components/ProjectHeader";
import ProjectsSubHeader from "./Components/ProjectSubHeader";
import StatsRightSideBar from "./Components/StatsRightSideBar";
function AllProjects() {
  return (
    <div className='bg-slate-50 w-full min-h-screen flex'>
      <AllProjectArea/>
      <StatsRightSideBar/>
    </div>
  );
}

function AllProjectArea() {
  return (
    <div className='max-lg:w-full max-sm:w-[91%]  w-[78%]  p-10 max-sm:p-8 flex flex-col gap-3'>
      <ProjectHeader/>
      <ProjectsSubHeader/>
      <AllProjectsSection/>
    </div>
  );
}

export default AllProjects;