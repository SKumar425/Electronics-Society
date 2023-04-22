/*import React, { useEffect } from "react";
import AnnouncementCard from "../components/announcementCard";
import H2 from "../components/headings/H2";
import { fetchAnnouncements } from "../store/actions/announcement_actions";
import { useDispatch, useSelector } from "react-redux";

const Announcements = () => {
  const announcements = useSelector((state) => state.announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    if (announcements && !announcements.data) {
      dispatch(fetchAnnouncements());
    }
  }, [dispatch]);

  return (
    <div className="pt-20 px-4 md:px-8 lg:mx-14">
      <h2 className="text-5xl text-gray-700 text-right font-bold mb-4">
              Resources
            </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
        {announcements.data
          ? announcements.data.map((prob) => {
              return (
                <AnnouncementCard
                  slug={prob.slug}
                  title={prob.title}
                  date={prob.date}
                  announcement_id={prob.id}
                  key={prob.id}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Announcements;*/

import React from "react";
import CardTwo from "./CardTwo";
import Rdata from "../constants/Rdata";



const AnnouncementCard = () => {
  

  return (
    <>
    <div className="pt-[64px] relative md:overflow-hidden">
      <div className="p-9">
        <h1 className="text-center text-5xl text-gray-600 text-right font-bold mb-4">Resources</h1>
        <div className="py-9">
     {Rdata.map((val) => {
     return(
      <CardTwo 
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title}
        linkpaper={val.linkpaper}
        linkvideo={val.linkvideo}
        linkcomponent={val.linkcomponent}
      />);
    })
    }
       </div>
      </div>
    </div>

   </>
  );
};

export default AnnouncementCard;


