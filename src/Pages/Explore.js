import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";

const Explore = () => {
  const [news, setNews] = useState(null);
  const [moreNews, setMoreNews] = useState(false);
  const [sportsNews, setSportsNews] = useState(null);
  const [moreSportsNews, setMoreSportsNews] = useState(false);
  const [technologyNews, setTechnologyNews] = useState(null);
  const [moreTechnologyNews, setMoreTechnologyNews] = useState(false);
  const [healthNews, setHealthNews] = useState(null);
  const [moreHealthNews, setMoreHealthNews] = useState(false);
  const [businessNews, setBusinessNews] = useState(null);
  const [moreBusinessNews, setMoreBusinessNews] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "097984f24bmsh8811627c5414e29p1326f4jsn71648956b79b",
      "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=12&category=entertainment`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNews(response.articles);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=12&category=sports`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSportsNews(response.articles);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=12&category=technology`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTechnologyNews(response.articles);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=12&category=health`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setHealthNews(response.articles);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=12&category=business`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setBusinessNews(response.articles);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moreSportsHandler = () => {
    setMoreSportsNews(!moreSportsNews);
  };

  const moreNewsHandler = () => {
    setMoreNews(!moreNews);
  };

  const moreTechHandler = () => {
    setMoreTechnologyNews(!moreTechnologyNews);
  };

  const moreHealthHandler = () => {
    setMoreHealthNews(!moreHealthNews);
  };

  const moreBusinessHandler = () => {
    setMoreBusinessNews(!moreBusinessNews);
  };

  return (
    <>
      <NavBar />
      <section className="w-4/5 h-full pb-10 mx-auto">
        <h1 className="text-[#E85A4F] font-bold text-3xl py-10 tracking-wider">
          Trending now: Sports{" "}
        </h1>
        {!news && <p className="text-xl text-center">Loading...</p>}
        {sportsNews &&
          sportsNews?.slice(0, 4).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}
        {moreSportsNews &&
          sportsNews?.slice(4, 12).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}

        {news && (
          <button
            className="text-[#E85A4F] font-bold text-2xl my-5 flex w-full justify-center xl:mb-10 tracking-wider hover:scale-105 duration-200"
            onClick={moreSportsHandler}
          >{`${!moreSportsNews ? "(see more)" : "(see less)"}`}</button>
        )}

        <h1 className="text-[#E85A4F] font-bold text-3xl pt-20 pb-10 tracking-wider">
          Trending now: Entertainment
        </h1>
        {!news && <p className="text-xl text-center">Loading...</p>}
        {news &&
          news?.slice(0, 4).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}
        {moreNews &&
          news?.slice(4, 12).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}

        {news && (
          <button
            className="text-[#E85A4F] font-bold text-2xl my-5 flex w-full justify-center xl:mb-10 tracking-wider hover:scale-105 duration-200"
            onClick={moreNewsHandler}
          >{`${!moreSportsNews ? "(see more)" : "(see less)"}`}</button>
        )}

        <h1 className="text-[#E85A4F] font-bold text-3xl pt-20 pb-10 tracking-wider">
          Trending now: Technology
        </h1>
        {!news && <p className="text-xl text-center">Loading...</p>}
        {technologyNews &&
          technologyNews?.slice(0, 4).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}
        {moreTechnologyNews &&
          technologyNews?.slice(4, 12).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}

        {news && (
          <button
            className="text-[#E85A4F] font-bold text-2xl my-5 flex w-full justify-center xl:mb-10 tracking-wider hover:scale-105 duration-200"
            onClick={moreTechHandler}
          >{`${!moreSportsNews ? "(see more)" : "(see less)"}`}</button>
        )}

        <h1 className="text-[#E85A4F] font-bold text-3xl pt-20 pb-10 tracking-wider">
          Trending now: Health
        </h1>
        {!news && <p className="text-xl text-center">Loading...</p>}
        {healthNews &&
          healthNews?.slice(0, 4).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}
        {moreHealthNews &&
          healthNews?.slice(4, 12).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}

        {news && (
          <button
            className="text-[#E85A4F] font-bold text-2xl my-5 flex w-full justify-center xl:mb-10 tracking-wider hover:scale-105 duration-200"
            onClick={moreHealthHandler}
          >{`${!moreSportsNews ? "(see more)" : "(see less)"}`}</button>
        )}

        <h1 className="text-[#E85A4F] font-bold text-3xl pt-20 pb-10 tracking-wider">
          Trending now: Business
        </h1>
        {!news && <p className="text-xl text-center">Loading...</p>}
        {businessNews &&
          businessNews?.slice(0, 4).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}

        {moreBusinessNews &&
          businessNews?.slice(4, 12).map((article, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0 mt-10 xl:gap-5 xl:mt-0 xl:items-start xl:flex-row"
              >
                <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mt-2 py-5 my-3 px-10 rounded-xl xl:whitespace-nowrap sm:text-2xl text-base font-normal text-start">
                  {article.title.substring(0, 75) + "..."}
                </div>
                <a
                  className="flex items-center justify-center xl:w-1/5 w-4/5 mx-auto xl:mx-0 px-10 py-5 mt-2 text-2xl font-medium duration-200 bg-[#E85A4F] text-white rounded-2xl hover:scale-105"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  See full article
                </a>
              </div>
            );
          })}

        {news && (
          <button
            className="text-[#E85A4F] font-bold text-2xl my-5 flex w-full justify-center xl:mb-10 tracking-wider hover:scale-105 duration-200"
            onClick={moreBusinessHandler}
          >{`${!moreSportsNews ? "(see more)" : "(see less)"}`}</button>
        )}
      </section>
    </>
  );
};

export default Explore;
