import { onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import Tweet from "../Components/Tweet";
import TweetBox from "../Components/TweetBox";
import { q } from "../firebase";
import FlipMove from "react-flip-move";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  onSnapshot(q, (snapshot) => {
    let tweets = [];
    snapshot.docs.forEach((doc) => {
      tweets.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setTweets(tweets);
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
      <TweetBox />;
      <FlipMove>
        {tweets?.map((post, index) => (
          <Tweet
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
