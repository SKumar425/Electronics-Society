import React from "react";
import ThreeColumnsOne from "../hoc/ThreeColumnsOne";
import Card from "./Card";
import Cdata from "../constants/Cdata";



const Community = () => {
  

  return (
    <>
      <ThreeColumnsOne>
        <div
          className="flex flex-col bg-white rounded-3xl shadow mb-8 p-1 cursor-pointer"
        >
          <div className="flex flex-row rounded-3xl items-center">
            <img
              src="/assets/logo.jpg"
              alt="username here"
              className="w-12 rounded-full"
            />
            <div

              className="flex flex-col items-start justify-center ml-6"
            >
              <p className="text-gray-1000">
                India's Biggest Electronics & Electrical Communies
              </p>
            </div>
          </div>
        </div>
      </ThreeColumnsOne>
    <div className="pt-[64px] relative md:overflow-hidden">  
     {Cdata.map((val) => {
     return(
      <Card 
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title}
        seriesname={val.seriesname}
        link={val.link}
      />);})}
      </div>
    </>
  );
};

export default Community;
