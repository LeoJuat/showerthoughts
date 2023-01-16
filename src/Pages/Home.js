import { onSnapshot } from "firebase/firestore";
import React, { useContext, useState } from "react";
import Post from "../Components/Post";
import PostBox from "../Components/PostBox";
import { q } from "../firebase";
import FlipMove from "react-flip-move";
import Trending from "../Components/Trending";
import NavBarLogin from "../Components/NavBarLogin";
import AuthContext from "../store/AuthContext";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const authCtx = useContext(AuthContext);

  onSnapshot(q, (snapshot) => {
    let posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setPosts(posts);
  });

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
      <Trending />
      <PostBox />;
      <FlipMove>
        {posts?.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
            category={post.category}
            image={post.image}
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
