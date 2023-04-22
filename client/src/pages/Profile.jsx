import React from "react";
import { Tab } from "@headlessui/react";
import { useParams } from "react-router-dom";

const tabs = [
  {
    id: "engagement",
    title: "Engagement",
  },
  {
    id: "answers",
    title: "Answers",
  },
  {
    id: "questions",
    title: "Questions",
  },
  {
    id: "saved",
    title: "Saved",
  },
  {
    id: "my-page",
    title: "My Page",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const { username } = useParams();

  return (
    <div className="bg-gray-100 pt-[64px]">
      <div className="p-4 md:p-8 max-w-6xl mx-auto">
        <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-col md:flex-row items-start jusify-center p-6 mb-4">
          <div className="flex-col md:flex-1 w-full">
            <div className="flex flex-col md:flex-row mb-4">
              <img
                src="../assets/profile_picture_2.jpg"
                alt="username here"
                className="w-full md:w-44 max-w-sm md:h-44 rounded-xl"
              />
              <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-start justify-between">
                <div className="flex flex-col mb-3">
                  <h2 className="text-left text-gray-700 text-2xl md:text-4xl font-bold">
                    Swadhin Kumar Senapati
                  </h2>
                  <h3 className="text-left text-gray-500 text-sm md:text-base font-semibold">
                    IoT developer || Software Developer
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
                    213k Followers
                  </p>
                  <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
                    21 Following
                  </p>
                  <p className="text-gray-800 text-xs md:text-sm font-bold mb-1">
                    13 Answers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 mt-3 md:ml-2 ">
            <p className="text-gray-500 text-sm font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              fuga doloribus architecto, at quae impedit, dicta, illum harum
              possimus iste eius odio facilis.
            </p>
          </div>
        </div>
        <Tab.Group>
          <Tab.List>
            <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-row items-start jusify-center">
              {tabs.map((category) => (
                <Tab
                  key={category.id}
                  className={({ selected }) =>
                    classNames(
                      "w-full text-sm text-gray-700 rounded-full py-2",
                      "focus:outline-none",
                      selected
                        ? "bg-indigo-300 text-white"
                        : "text-gray-700 hover:bg-indigo-300 hover:text-white"
                    )
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </div>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-col md:flex-row items-start jusify-center px-4 py-2 my-4">
                Engagements
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-col md:flex-row items-start jusify-center px-4 py-2 my-4">
                Answers
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-col md:flex-row items-start jusify-center px-4 py-2 my-4">
                Questions
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-col md:flex-row items-start jusify-center px-4 py-2 my-4">
                Saved
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="bg-white bg-opacity-50 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter flex flex-col md:flex-row items-start jusify-center px-4 py-2 my-4">
                My Page
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
export default Profile;
