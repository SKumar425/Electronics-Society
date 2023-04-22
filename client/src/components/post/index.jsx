import React from "react";
import { Link } from "react-router-dom";

const Post = ({
  slug,
  username,
  name,
  profession,
  message,
  title,
  excerpt,
  likedByUser,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow mb-8 p-1">
      <div className="flex flex-row bg-gray-100 rounded-3xl justify-between">
        <div className="flex flex-row items-center">
          <img
            src="/assets/1.jpg"
            alt={username}
            className="w-12 rounded-full"
          />
          <div className="flex flex-col items-start justify-center ml-2">
            <h4 className="text-lg text-gray-700 font-semibold">{name}</h4>
            <small className="text-xs text-gray-500">{profession}</small>
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>
      <div className="p-3">
        <h4 className="text-lg text-gray-700 font-semibold tracking-tight mb-2">
          {title}
        </h4>
        {/* <p className="text-base text-gray-800">{renderHTML(message)}</p> */}
        <p className="text-sm text-gray-800">
          {excerpt}
          <Link to={slug} className="text-indigo-500">
            .....(Read More)
          </Link>
        </p>
      </div>
      <div className="bg-gray-100 rounded-b-3xl p-2">
        <button
          className={` hover:bg-indigo-300 hover:text-white rounded-full px-3 py-2 text-sm flex items-center justify-center ${
            likedByUser ? "bg-indigo-400 text-white" : "bg-white text-gray-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          Upvote
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Post;
