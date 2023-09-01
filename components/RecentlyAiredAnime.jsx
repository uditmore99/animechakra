"use client";
import SearchAnimeCard from "./SearchAnimeCard";
import React, { useEffect, useState } from "react";
import { getRecentAnime } from "@/utils/getTopAiringAnimeData";

const RecentlyAiredAnime = () => {
  const [recentlyAired, setRecentlyAired] = useState();
  useEffect(() => {
    const getRecentlyAiredAnime = async () => {
      const serRes = await getRecentAnime();
      const response = await serRes.json();
      setRecentlyAired(response.results);
      // console.log(trendingAnime);
    };
    getRecentlyAiredAnime();
  }, []);

  return (
    <>
      {/* Recently Aired Episodes */}
      <div className="text-white font-bold m-4 text-3xl md:text-4xl lg:text-5xl">
        Recently Aired Anime
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 m-6 gap-10 sm:grid-cols-5 sm:gap-5">
        {/* {console.log(trendingAnime)} */}
        {recentlyAired?.map((anime) => (
          <SearchAnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.title.userPreferred}
            genre={anime?.genres.map((genre) => " " + genre + " ")}
            imageurl={anime.image}
          />
        ))}
      </div>
    </>
  );
};

export default RecentlyAiredAnime;
