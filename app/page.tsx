import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";
import JobsTL from "@/components/JobsTL";
import { MyApproach } from "@/components/MyApproach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div
        className="relative  bg-black-100 flex  justify-center items-center flex-col overflow-hidden
      mx-auto sm:px-10 px-5 "
      >
        <div className="max-w-7xl w-full">
          <FloatingNav />
          <Hero />
          <Grid />
          <RecentProjects />
          <JobsTL />
          <MyApproach />
          <Footer />
        </div>
      </div>
    </main>
  );
}
