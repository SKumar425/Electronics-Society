import React from "react";
import { Link, useLocation } from "react-router-dom";

const AnnouncementCard = (props) => {
  const location = useLocation();
  return (
    <Link
      to={`${location.pathname}/${props.slug}`}
      className="bg-white px-3 py-4 border-white border-2 bg-opacity-50 backdrop-blur backdrop-filter rounded-2xl shadow hover:shadow-md transition-all duration-200 hover:bg-blue-50"
    >
      <p className="text-sm mb-4">{props.title}</p>
      <date className="py-1 px-2 bg-blue-600 text-white text-xs rounded-full">
        {props.date}
      </date>
    </Link>
  );
};

export default AnnouncementCard;
