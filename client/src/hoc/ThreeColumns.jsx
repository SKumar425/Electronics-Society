import React from "react";
import { H3 } from "../components/headings";
import Glassmorphism from "./Glassmorphism";
import { categories, topProblems } from "../constants/dummy";

const ThreeColumns = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 pt-24 container mx-auto align-start items-start bg-gray-100 relative">
      <div className="w-72 h-72 bg-purple-500 rounded-full fixed top-0 left-0 animate-blobLeft animation-delay-2000"></div>
      <div className="w-72 h-72 bg-blue-500 rounded-full fixed bottom-0 right-0 animate-blobRight animation-delay-2000"></div>
      <Glassmorphism hideOnPhone>
        <div className="p-4 lg:p-5 rounded-full">
          <H3 className="mb-4">Popular Categories</H3>
          <hr className="mb-4" />
          <div className="">
            {categories
              ? categories.map((object) => (
                <a href={object.link} target=''>
                  <div
                    className="bg-white py-2 px-6 text-sm mb-4 rounded-lg shadow-sm cursor-pointer hover:bg-purple-400 hover:text-white transition text-gray-600"
                    key={object.id}  
                  >
                    <p>{object.name}</p>
                    
                  </div>
                  </a>
                  
                ))
              : null}
          </div>
        </div>
      </Glassmorphism>
      <div className="bg-transparent flex-grow col-start-2 col-end-4 z-10">
        {props.children}
      </div>
      <Glassmorphism hideOnPhone>
        <div className="p-4 lg:p-5 rounded-full">
          <H3 className="mb-4">Top Problems</H3>
          <hr className="mb-4" />
          <div className="">
            {topProblems
              ? topProblems.map((object) => (
                <a href={object.linkone} target="">
                  <div
                    className="flex flex-col bg-white py-2 px-4 text-sm mb-4 rounded-lg shadow-sm cursor-pointer hover:bg-purple-400 hover:text-white transition text-gray-600 items-start"
                    key={object.id}
                  >
                    <p>{object.name}</p>
                  </div>
                  </a>
                ))
              : null}
          </div>
        </div>
      </Glassmorphism>
    </div>
  );
};

export default ThreeColumns;
