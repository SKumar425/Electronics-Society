import React from "react";



const ThreeColumnsOne = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 pt-24 container mx-auto align-start items-start bg-gray-100 relative">
    <div className="w-72 h-72 bg-purple-500 rounded-full fixed top-0 left-0 animate-blobLeft animation-delay-2000"></div>
    <div className="w-72 h-72 bg-blue-500 rounded-full fixed bottom-0 right-0 animate-blobRight animation-delay-2000"></div>
      
    <div className="bg-transparent flex-grow col-start-2 col-end-4 z-10">
      {props.children}
    </div>
      
    </div>
  );
};

export default ThreeColumnsOne;

