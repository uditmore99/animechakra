"use client";
import SearchAnimeCard from "./SearchAnimeCard";
import { useState, useEffect } from "react";
import { getTopAiringAnime } from "@/utils/getTopAiringAnimeData";

const PopularAnime = () => {
  const [trendingAnime, setTrendingAnime] = useState();
  useEffect(() => {
    const getTrendingAnime = async () => {
      const serRes = await getTopAiringAnime();
      const response = await serRes.json();
      setTrendingAnime(response.results);
      // console.log(trendingAnime);
    };
    getTrendingAnime();
  }, []);

  return (
    <div>
      {/* Trending Anime */}
      <div className="text-white font-bold m-4 text-3xl md:text-4xl lg:text-5xl">
        Trending Anime
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 m-6 gap-10 sm:grid-cols-5 sm:gap-5">
        {/* {console.log(trendingAnime)} */}
        {trendingAnime?.map((anime) => (
          <SearchAnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.title.userPreferred}
            genre={anime?.genres.map((genre) => " " + genre + " ")}
            imageurl={anime.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularAnime;
