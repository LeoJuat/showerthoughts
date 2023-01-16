import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  const [news, setNews] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "097984f24bmsh8811627c5414e29p1326f4jsn71648956b79b",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNews(response.value);
        console.log(response.value);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-4/5 h-full pb-10 mx-auto">
      <h1 className="text-[#E85A4F] font-bold text-3xl py-10 tracking-wider">
        Trending now{" "}
        <span className="text-sm font-normal tracking-normal">
          <Link to="/explore">(see more)</Link>
        </span>
      </h1>
      {!news && <p className="text-xl text-center">Loading...</p>}
      {news &&
        news?.slice(0, 3).map((article, index) => {
          return (
            <div className="flex gap-5">
              <div
                key={index}
                className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-3 px-10 rounded-xl whitespace-nowrap overflow-hidden text-2xl font-normal text-start"
              >
                {article.name.substring(0, 75) + "..."}
              </div>
              <a
                key={article.name}
                className="flex items-center justify-center w-1/5 px-10 py-3 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
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
  );
};

export default Trending;
