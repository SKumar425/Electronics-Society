import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupsIcon from "@mui/icons-material/Groups";
import AppsIcon from "@mui/icons-material/Apps";
import { showMessage } from "../../utils";

import { Menu, Transition} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [selected, setSelected] = React.useState("HOME");
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();


  useEffect(() => {
    if (notification && notification.error) {
      const text = notification.message
        ? notification.message
        : "Error, please try again later";

      showMessage("ERROR", text);
    }
  }, [notification, dispatch]);

  return (
    <div className="flex flex-row items-center justify-evenly w-full h-16 fixed border-white border-b-4 bg-opacity-70 bg-clip-padding filter backdrop-blur-xl bg-white backdrop-filter mb-8 z-50">
      <Link to="/">
      <img src="/assets/logo.jpg" alt="logo" className="h-full h-12 w-12" />
      </Link>
      <div className="flex flex-row items-center justify-center h-full ">
        <Link
          className="mx3 text-lg hover:bg-gray-100 p-2 mx-3 rounded-full"
          to="/"
          onClick={() => setSelected("HOME")}
        >
          <HomeIcon
            sx={{
              color: selected === "HOME" ? "#6C63FF" : "#A4A4B2",
              fontSize: 32,
            }}
          />
        </Link>
        <Link
          className="mx3 text-lg hover:bg-gray-100 p-2 mx-3 rounded-full"
          to="/trending"
          onClick={() => setSelected("TRENDING")}
        >
          <TrendingUpIcon
            sx={{
              color: selected === "TRENDING" ? "#6C63FF" : "#A4A4B2",
              fontSize: 32,
            }}
          />
        </Link>
        <Link
          className="mx3 text-lg hover:bg-gray-100 p-2 mx-3 rounded-full"
          to="/post-project"
          onClick={() => setSelected("NEWPOST")}
        >
          <AddBoxIcon
            sx={{
              color: selected === "NEWPOST" ? "#6C63FF" : "#A4A4B2",
              fontSize: 32,
            }}
          />
        </Link>
        <Link
          className="mx3 text-lg hover:bg-gray-100 p-2 mx-3 rounded-full"
          to="/community"
          onClick={() => setSelected("COMMUNITY")}
        >
          <GroupsIcon
            sx={{
              color: selected === "COMMUNITY" ? "#6C63FF" : "#A4A4B2",
              fontSize: 32,
            }}
          />
        </Link>
        <div
          className="mx3 text-lg hover:bg-gray-100 cursor-pointer p-2 mx-3 rounded-full"
          onClick={() => setSelected("MORE")}
        >
          <Menu>
            <Menu.Button className="relative ">
              <AppsIcon
                sx={{
                  color: selected === "MORE" ? "#6C63FF" : "#A4A4B2",
                  fontSize: 32,
                }}
              />
            </Menu.Button>
            <Menu.Items className="absolute z-10 bg-white rounded-lg mt-3">
              <div className="flex flex-col items-start jusitfy-center ">
                <Menu.Item className="flex flex-row px-3 py-2 bg-white hover:bg-indigo-400 hover:text-white border-b border-gray-200 w-full rounded-lg text-sm">
                  {({ active }) => (
                    <Link
                      className={`${active && "bg-blue-500"}`}
                      to="/announcements"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Resources
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item className="flex flex-row  px-3 py-2 bg-white hover:bg-indigo-400 hover:text-white border-b border-gray-200 w-full rounded-lg text-sm">
                  {({ active }) => (
                    <Link className={`${active && "bg-blue-500"}`} to="/about">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                      About
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item className="flex flex-row  px-3 py-2 bg-white hover:bg-indigo-400 hover:text-white border-b border-gray-200 w-full rounded-lg text-sm">
                  {({ active }) => (
                    <Link className={`${active && "bg-blue-500"}`} to="/team">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      Team
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item className="flex flex-row  px-3 py-2 bg-white hover:bg-indigo-400 hover:text-white border-b border-gray-200 w-full rounded-lg text-sm">
                  {({ active }) => (
                    <Link className={`${active && "bg-blue-500"}`} to="/join">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clipRule="evenodd"
                        />
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                      </svg>
                      Join
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item className="flex flex-row  px-3 py-2 bg-white hover:bg-indigo-400 hover:text-white border-b border-gray-200 w-full rounded-lg text-sm">
                  {({ active }) => (
                    <Link
                      className={`${active && "bg-blue-500"}`}
                      to="/contact"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contact
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <Menu>
      
      {
        isAuthenticated ?(
          <>
          <button className="flex-row float-xl-right pr-auto btn btn-outline-primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          <Menu.Button
          to="/shivam.rai"
          className="flex flex-row items-center justify-around rounded-full shadow-md bg-white opacity-100 px-1 cursor-pointer hover:bg-gray-100 relative"
        >
          <img
            src="/assets/profile_picture_2.jpg"
            alt="profile picture"
            className="w-11 h-11 rounded-full my-1"
          />
          <p className="text-sm px-3 pr-4 font-semibold">Swadhin Kumar Senapati</p>
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0">
          <Menu.Items className="absolute right-0 top-8 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-indigo-400"
                    } py-2 px-3 rounded-md flex flex-row items-center border-b-1 text-gray-800 hover:text-white group border-b`}
                    to="/user/swadhin.kumar"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-800 group-hover:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-indigo-400"
                    } py-2 px-3 rounded-md flex flex-row items-center border-b-1 text-gray-800 hover:text-white group`}
                    to="/user/swadhin.kumar/settings"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-800 group-hover:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Settings
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
        </>
        ):(
          <Menu><button className="btn btn-outline-primary" onClick={() => loginWithRedirect()}>Log In</button></Menu> 
        )
      }
       </Menu>
    </div>
  );
};
export default Header;
