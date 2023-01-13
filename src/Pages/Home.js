import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Tweet from "../Components/Tweet";
import TweetBox from "../Components/TweetBox";
import { colRef } from "../firebase";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let tweets = [];
        snapshot.docs.forEach((doc) => {
          tweets.push({ ...doc.data(), id: doc.id });
        });
        setTweets(tweets);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <TweetBox />;
      {tweets?.map((post, index) => (
        <Tweet
          key={index}
          username={post.username}
          text={post.text}
          avatar={post.avatar}
          category={post.category}
        />
      ))}
      <Tweet
        username="JaneDoe23"
        text="I'm so glad I finally found an easy website to help track my
        workout and nutrition progress! Thank you #TRACKr"
        avatar="https://user-images.githubusercontent.com/100502573/212015321-67126986-59a2-41c7-af36-49da4b977278.jpg"
        image="https://user-images.githubusercontent.com/100502573/212005376-10ca58ed-3338-4a0f-952d-9ac37c1459da.png"
        category="Fitness-Health"
      />
      <Tweet
        username="JohnDoe"
        text="I’m so excited for a first look at #Spiderman actor Tom
        Holland in #SpidermanComingHome ! I’ll update y’all! 🕷"
        avatar="https://user-images.githubusercontent.com/100502573/212198214-081e9557-2d0d-48d1-9a3f-296b2dbafce2.jpg"
        image="https://user-images.githubusercontent.com/100502573/212198528-ba21fc46-e85e-44ef-aad3-6ae1b4026c49.jpg"
        category="Movies-Shows"
      />
    </>
  );
};

export default Home;
