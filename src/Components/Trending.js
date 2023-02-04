/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Trending = () => {
  const [news, setNews] = useState(null);
  const [sportsNews, setSportsNews] = useState(null);

  const authCtx = useContext(AuthContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "097984f24bmsh8811627c5414e29p1326f4jsn71648956b79b",
      "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=2&category=sports",
      options
    )
      .then((response) => response.json())
      .then((response) => setSportsNews(response.articles))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=2&category=entertainment",
      options
    )
      .then((response) => response.json())
      .then((response) => setNews(response.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="w-4/5 h-full pb-10 mx-auto">
        <h1 className="text-[#E85A4F] font-bold text-3xl py-10 tracking-wider">
          Trending now{" "}
          <span className="text-sm font-normal tracking-normal">
            {authCtx.isLoggedIn && <Link to="/explore">(see more)</Link>}
            {!authCtx.isLoggedIn && (
              <Link to="/login">(login to see more)</Link>
            )}
          </span>
        </h1>
        {!news && <p className="text-xl text-center">Loading...</p>}
        {sportsNews &&
          sportsNews?.map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 mt-5 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 70) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-3 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}
        {news &&
          news?.map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 mt-5 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-3 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Trending;
