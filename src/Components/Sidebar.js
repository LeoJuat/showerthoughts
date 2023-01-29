import { Avatar } from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { usersRef } from "../firebase";

const Sidebar = () => {
  const [searchName, setSearchName] = useState("");
  const [oldPosts, setOldPosts] = useState([]);
  const [senderUid, setSenderUid] = useState("");
  const [receiverUid, setReceiverUid] = useState("");

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

    oldPosts?.map((post) =>
      post.username?.includes(searchName) ? setReceiverUid(post.uid) : ""
    );

    console.log(receiverUid);
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
              <p onClick={chatHandler} key={post.uid}>
                {post.username}
              </p>
            ) : (
              ""
            );
          })}
        <div className="flex items-center bg-[#ddd3c4] py-3 px-2 rounded-lg">
          <Avatar />
          <h1 className="ml-5">Name:</h1>
          <p className="ml-3">This is the message...</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
