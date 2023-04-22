import React from "react";

const data = [
  {
    title: "Graphic Designer",
    city: "Banglore",
    country: "India",
    url: "https://google.com",
  },
  {
    title: "Full Stack Developer",
    city: "Mumbai",
    country: "India",
    url: "https://google.com",
  },
  {
    title: "React Native Developer",
    city: "Ranchi",
    country: "India",
    url: "https://google.com",
  },
  {
    title: "Graphic Designer",
    city: "Banglore",
    country: "India",
    url: "https://google.com",
  },
  {
    title: "Full Stack Developer",
    city: "Mumbai",
    country: "India",
    url: "https://google.com",
  },
  {
    title: "React Native Developer",
    city: "Ranchi",
    country: "India",
    url: "https://google.com",
  },
];
const datatwo = [
  {
    title: "VLSI Physical Design",
    city: "IIT Kharagpur",
    country: "India",
    url: "https://nptel.ac.in/courses/106105161",
  },
  {
    title: "Advanced IOT Applications",
    city: "IISc Bangalore",
    country: "India",
    url: "https://nptel.ac.in/courses/108108123",
  },
  {
    title: "Optical Wireless Communications for Beyond 5G Networks and IoT",
    city: " IIIT Delhi",
    country: "India",
    url: "https://nptel.ac.in/courses/108106190",
  },
  {
    title: "Nanobiotechnology",
    city: "IIT Madras",
    country: "India",
    url: "https://nptel.ac.in/courses/118106019",
  },
  {
    title: "Foundation of Cloud IoT Edge ML",
    city: "IIT Patna",
    country: "India",
    url: "https://nptel.ac.in/courses/106104242",
  },
  {
    title: "ACM India Summer School on IoT and Embedded Systems",
    city: "IIT Madras",
    country: "India",
    url: "https://nptel.ac.in/courses/128108016",
  },
  {
    title: "Computer Architecture",
    city: "IIT Delhi",
    country: "India",
    url: "https://nptel.ac.in/courses/106102062",
  },
  {
    title: "React Native Developer",
    city: "Ranchi",
    country: "India",
    url: "https://google.com",
  },
  {
    title: "Full Stack Developer",
    city: "Mumbai",
    country: "India",
    url: "https://google.com",
  },
];

const Join = () => {
  return (
    <div className="pt-[64px] overflow-hidden pb-16">
      <div className="p-16 max-w-screen-lg m-auto relative">
        <img
          src="/assets/join_us_featured_img.jpg"
          alt="join asreapr team"
          className="rounded-3xl border-white border-2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <div className="flex flex-col text-center items-end justify-center">
            <h2 className="text-5xl text-gray-700 text-right font-bold mb-4">
              Join Our Family
            </h2>
            <p className="text-left text-base">
            Become a part of a technical community where you are NOT expected to keep your problems to yourselves. Share, Solve ,Join ,Support our Circutal Society .

              <br /> <br /> The most practical solutions (prototypes) for a particular problem will be exhibited in the marketplace. 
                    Our goals are to create a contribution platform,a learning hub and a place to provide best solution .
            </p>
          </div>
          <img
            src="/assets/join_clipart.png"
            alt="join us clipart"
            className=""
          />
        </div>

        <div className="mt-16 bg-white bg-opacity-30 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter p-2 py-8 sm:p-4 md:p-6 lg:p-8 shadow">
          <h3 className="text-center text-2xl">Online Learning</h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start px-4">
            {datatwo.map((job) => (
              <div className="flex flex-col items-start justify-center bg-white px-6 py-4 border-white border-2 bg-opacity-50 backdrop-blur backdrop-filter rounded-2xl shadow hover:shadow-md transition-all duration-200 hover:bg-blue-50">
                <p className="text-md text-gray-800 font-poppins text-left">
                  {job.title}
                </p>
                <small className="text-sm text-gray-500 font-light text-left">
                  {job.city}, {job.country}
                </small>
                <a
                  href={job.url}
                  className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-1 text-xs rounded-xl mt-3"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-white bg-opacity-30 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter p-2 py-8 sm:p-4 md:p-6 lg:p-8 shadow">
          <h3 className="text-center text-2xl">Job Openings</h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start px-4">
            {data.map((job) => (
              <div className="flex flex-col items-start justify-center bg-white px-6 py-4 border-white border-2 bg-opacity-50 backdrop-blur backdrop-filter rounded-2xl shadow hover:shadow-md transition-all duration-200 hover:bg-blue-50">
                <p className="text-md text-gray-800 font-poppins text-left">
                  {job.title}
                </p>
                <small className="text-sm text-gray-500 font-light text-left">
                  {job.city}, {job.country}
                </small>
                <a
                  href={job.url}
                  className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-1 text-xs rounded-xl mt-3"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
