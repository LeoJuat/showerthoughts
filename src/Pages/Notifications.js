import { Avatar } from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { nQ } from "../firebase";

const Notifications = () => {
  const [oldPosts, setOldPosts] = useState([]);

  useEffect(() => {
    onSnapshot(nQ, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setOldPosts(posts);
    });
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <>
      <NavBar />
      <h1 className="text-[#E85A4F] w-4/5 mx-auto font-bold text-3xl py-10 tracking-wider">
        Notifications
      </h1>
      {oldPosts?.map((post, index) => {
        return post.uid === localStorage.getItem("uid") ? (
          <div
            className="bg-[rgba(216,195,165,0.50)] flex justify-between items-end mx-auto w-3/4 mt-4 py-5 my-3 px-20 rounded-xl whitespace-nowrap overflow-hidden text-2xl font-normal text-start"
            key={index}
          >
            <div className="flex items-center gap-12">
              <Avatar src={post.avatar} sx={{ width: 100, height: 100 }} />
              <h1>
                {post.username} {post.type}d your post!
              </h1>
            </div>
            <p className="text-[#717171] text-sm">
              {post.timestamp?.toDate().toLocaleDateString("en-US", options)}
            </p>
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default Notifications;
