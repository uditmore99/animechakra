"use client";

import { useState, useEffect } from "react";
import { getTopAiringAnime } from "@/utils/getTopAiringAnimeData";
import AnimeCard from "./AnimeCard";

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
    <div className="grid grid-cols-2 md:grid-cols-5 m-6 gap-10 sm:grid-cols-5 sm:gap-5">
      {console.log(trendingAnime)}
      {trendingAnime?.map((anime) => (
        <AnimeCard
          key={anime.id}
          id={anime.id}
          title={anime.title}
          genre={anime?.genres.map((genre) => " " + genre + " ")}
          //   genre={displayedGenres.join(", ")}
          imageUrl={anime.image}
        />
      ))}
    </div>
  );
};

export default PopularAnime;
