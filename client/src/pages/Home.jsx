import React, { useState } from "react";
import Post from "../components/post";
import ThreeColumns from "../hoc/ThreeColumns";
import { posts } from "../constants/dummy";
import { Dialog } from "@headlessui/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ThreeColumns>
        <div
          onClick={() => setIsOpen(true)}
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
                Welcome to the electronics society!
              </p>
            </div>
          </div>
        </div>

        {posts
          ? posts.map((obj) => (
              <Post
                name={obj.name}
                username={obj.username}
                profession={obj.profession}
                title={obj.title}
                message={obj.message}
                excerpt={obj.excerpt}
                slug={obj.slug}
                likedByUser={obj.likedByUser}
              />
            ))
          : null}
          
      </ThreeColumns>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Home;
