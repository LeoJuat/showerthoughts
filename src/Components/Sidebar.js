import { Avatar } from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { usersRef } from "../firebase";

const Sidebar = ({ messages, setMessageThread }) => {
  const [searchName, setSearchName] = useState("");
  const [oldPosts, setOldPosts] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();

    setSearchName(e.target.value);

    onSnapshot(usersRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setOldPosts(posts);
    });
  };

  const chatHandler = (e) => {
    e.preventDefault();

    setMessageThread(e.target.id);
  };

  return (
    <>
      <div className="bg-[#E85A4F] flex-1 rounded-tl-xl rounded-bl-xl py-5 px-3">
        <input
          className="w-full px-2 py-4 mb-5 rounded-md"
          placeholder="Search name"
          value={searchName}
          onChange={searchHandler}
        ></input>
        {searchName &&
          oldPosts?.map((post) => {
            return post.username?.includes(searchName) ? (
              <p
                className="flex items-center bg-[#ddd3c4] py-5 mb-3 px-1 rounded-lg hover:bg-[#cec3b2] hover:scale-105 duration-300 cursor-pointer"
                onClick={chatHandler}
                key={post.uid}
                value={post.username}
                id={post.uid}
              >
                {post.username}
              </p>
            ) : (
              ""
            );
          })}
        {!searchName && (
          <div className="flex items-center bg-[#ddd3c4] py-3 px-2 rounded-lg">
            <Avatar />
            <h1 className="ml-5">Name:</h1>
            <p className="ml-3">This is the message...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
