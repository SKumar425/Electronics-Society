import React from "react";


const About = () => {
  return (
    <div className="pt-[64px] overflow-hidden pb-16">
      <div className="p-16 max-w-screen-lg m-auto relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          
        <img
          src="/assets/electronics.webp"
          alt="join asreapr team"
          className="rounded-3xl border-white border-2"
        />
        <div className="flex flex-col text-center items-end justify-center">
        <p className="text-left text-base">
        In this proposed project, we’ve tried to exhibit the need of an online community for core departments. We’re making a website which will be the drop platform for all. Students and Researchers will be benefitted. All reasonable precautions are considered in the preparation of the circuits and diagrams to ensure the reliability of the magazine. 
            </p>
        </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <div className="flex flex-col text-center items-end justify-center">
            <h2 className="text-5xl text-gray-700 text-left font-bold mb-4">
              About Us
            </h2>
            <p className="text-left text-base">
            However, we cannot accept legal responsibility for it. In this proposed project, we’ve tried to exhibit the need of an online community for core departments. So here we develop a platform where all electronics enthusiasts can collaborate and join together and they can share their projects, ideas, resources with the world and solve the real-world problem.
            </p>
          </div>
          <img
            src="/assets/sharing.png"
            alt="join us clipart"
            className="rounded-3xl border-white border-2"
          />
        </div>
        </div>
      </div>
    
  );
};

export default About;
