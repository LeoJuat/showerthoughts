import { Avatar } from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { chatQ, usersRef } from "../firebase";

const Sidebar = ({ setMessageThread }) => {
  const [searchName, setSearchName] = useState("");
  const [oldPosts, setOldPosts] = useState([]);
  const [sideBar, setSideBar] = useState([]);

  useEffect(() => {
    onSnapshot(chatQ, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setSideBar(posts);
    });
  }, []);

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

  const key = "username";

  const arrayUniqueByKey = [
    ...new Map(sideBar?.map((item) => [item[key], item])).values(),
  ];

  console.log(arrayUniqueByKey);

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
                className="flex items-center bg-[#ddd3c4] py-5 mb-3 px-1 rounded-lg hover:bg-[#cec3b2] hover:scale-105 duration-300 cursor-pointer pl-5"
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
        {!searchName &&
          arrayUniqueByKey?.map((obj, index) => {
            if (
              obj.username !== localStorage.getItem("name") &&
              obj.receiverUid === localStorage.getItem("uid")
            ) {
              return (
                <div
                  onClick={chatHandler}
                  key={index}
                  id={obj.senderUid}
                  className="flex items-center bg-[#ddd3c4] py-5 mb-3 px-1 rounded-lg hover:bg-[#cec3b2] hover:scale-105 duration-300 cursor-pointer pl-5"
                >
                  <Avatar src={obj.avatar} />
                  <h1 className="ml-5">{obj.username}:</h1>
                  <p className="ml-3">Select to see messages</p>
                </div>
              );
            }
            return "";
          })}
      </div>
    </>
  );
};

export default Sidebar;
