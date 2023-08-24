"use client";

import { useEffect, useState } from "react";

const VideoCarousel = () => {
  const [topAiringAnimeTrailerUrl, setTopAiringAnimeTrailerUrl] = useState();
  const [topAiringAnimeTitle, setTopAiringAnimeTitle] = useState();
  const [topAiringAnimeSynopsis, setTopAiringAnimeSynopsis] = useState();
  const [topAiringAnimeCover, setTopAiringAnimeCover] = useState();
  const [topAiringAnimeId, setTopAiringAnimeId] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const getTopAiringAnime = async () => {
      const serRes = await fetch("/api/top-airing-anime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ randomNumber }),
      });
      if (serRes.ok) {
        // console.log(response);
        const response = await serRes.json();
        setTopAiringAnimeTrailerUrl(response[0]);
        setTopAiringAnimeTitle(response[1]);
        setTopAiringAnimeSynopsis(response[2]);
        setTopAiringAnimeCover(response[3]);
        setTopAiringAnimeId(response[4]);
      }
    };
    getTopAiringAnime();
  }, []);
  [];
  //h-[56.25vw]
  return (
    <>
      <div className=" relative h-[56.25vw]  transition z-20">
        {topAiringAnimeTrailerUrl === "useImage" ? (
          <img
            className="w-full h-[56.25vw] object-cover brightness-50"
            src={topAiringAnimeCover}
            alt="Anime Image"
          />
        ) : (
          <iframe
            className="w-full h-[56.25vw] object-cover brightness-50"
            src={topAiringAnimeTrailerUrl}
            title="Anime Trailer"
          ></iframe>
        )}
        {/*   md:top-[40&] */}
        <div className=" absolute top-[15%] md:top-[20%] lg:top-[25%] sm:ml-16 ml-3">
          <p className="text-white lg:text-6xl md:text-3xl text-2xl h-full w-[100%] z-40  font-bold drop-shadow-2xl">
            {topAiringAnimeTitle}
          </p>
          <p
            className="text-white text-[15px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-2xl "
            dangerouslySetInnerHTML={{ __html: topAiringAnimeSynopsis }}
          />
          {topAiringAnimeId ? (
            <a
              className="w-24 h-6 m-3 text-center absolute bg-white hover:opacity-75 opacity-100 rounded-lg"
              href={`/info/${topAiringAnimeId}`}
            >
              More info
            </a>
          ) : (
            <></>
          )}

          <div className=" flex flex-row items-center mt-3 md:mt-4 gap-3"></div>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
