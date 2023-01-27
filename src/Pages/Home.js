import { onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Post from "../Components/Post";
import PostBox from "../Components/PostBox";
import { q } from "../firebase";
import FlipMove from "react-flip-move";
import Trending from "../Components/Trending";
import NavBarLogin from "../Components/NavBarLogin";
import AuthContext from "../store/AuthContext";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [oldPosts, setOldPosts] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
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
      {authCtx.isLoggedIn && <NavBar />}
      {!authCtx.isLoggedIn && <NavBarLogin />}
      <h1 className="text-[#E85A4F] underline underline-offset-4 decoration-[rgba(216,195,165,0.50)] font-bold text-5xl py-20 flex justify-center tracking-wider w-3/5 mx-auto">{`Hi, ${localStorage.getItem(
        "name"
      )}! Great to see you!`}</h1>
      <Trending />
      <PostBox />
      <FlipMove>
        {oldPosts?.map((post, index) => (
          <Post
            key={index}
            comment={post.comment}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
            category={post.category}
            image={post.image}
            uuid={post.postUUID}
            uid={post.uid}
            originalUUID={post.originalUUID}
            oldPosts={oldPosts}
            timestamp={post.timestamp
              ?.toDate()
              .toLocaleDateString("en-US", options)}
          />
        ))}
      </FlipMove>
    </>
  );
};

export default Home;
