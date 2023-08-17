"use client";

import { useEffect, useState } from "react";

const VideoCarousel = () => {
  const [topAiringAnimeTralerUrl, setTopAiringAnimeTralerUrl] = useState();
  const [topAiringAnimeTitle, setTopAiringAnimeTitle] = useState();
  const [topAiringAnimeSynopsis, setTopAiringAnimeSynopsis] = useState();

  useEffect(() => {
    const getTopAiringAnime = async () => {
      const serRes = await fetch("/api/top-airing-anime");

      const response = await serRes.json();

      setTopAiringAnimeTralerUrl(response[0]);
      setTopAiringAnimeTitle(response[1]);
      setTopAiringAnimeSynopsis(response[2]);
    };
    getTopAiringAnime();
  }, []);
  [];

  return (
    <>
      <div className=" relative h-[56.25vw]  transition z-20">
        <iframe
          className="w-full h-[56.25vw] object-cover brightness-50"
          src={topAiringAnimeTralerUrl}
          title="Anime Trailer"
        ></iframe>

        <div className=" absolute top-[30%] md:top-[40&] ml-4 md:ml-16">
          <p className="text-white  text-xl md:text-5xl h-full w-[100%] z-40 lg:text-6xl font-bold drop-shadow-2xl">
            {topAiringAnimeTitle}
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-2xl ">
            {topAiringAnimeSynopsis}
          </p>
          <div className=" flex flex-row items-center mt-3 md:mt-4 gap-3"></div>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
