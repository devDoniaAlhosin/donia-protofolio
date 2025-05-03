"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/ProjectPin";
import { Tabs } from "@/components/ui/Tabs";
import { useState } from "react";

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { title: "All ", value: "all" },
    { title: "Web Templetes", value: "web" },
    { title: "Wordpress", value: "wordpress" },
    { title: "Figma Layouts", value: "figma" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <div className="py-20 sm:py-10 " id="projects">
      <h1 className="text-4xl md:text-5xl font-bold text-e-white">
        A Small Selection of{" "}
        <span className="text-purple-400">Recent Projects</span>
      </h1>
      <div className="mt-10 w-fit p-2 border-1 border-e-white rounded-full ">
        <Tabs 
          tabs={tabs.map(tab => ({ ...tab, content: null }))} 
          containerClassName="flex flex-row items-center justify-end"
          onTabChange={(tab) => setActiveTab(tab.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8  px-4 auto-rows-[27.4rem]">
        {filteredProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-full w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-left">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-left text-[10px] line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
