import SideBar from "./Component/SideBar";
import AllProjects from "./Pages/AllProjects/AllProjects";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      <SideBar />
      <AllProjects />
    </div>
  );
}



