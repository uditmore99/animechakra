"use client";
import SearchAnimeCard from "./SearchAnimeCard";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RecentlyAiredAnime = () => {
  const {
    data: queryResults,

    isFetching, // you can add loading states as well
  } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get("/api/recent");
      return data.results;
    },
    queryKey: ["recent-aired-anime"], //to cache it
  });

  return (
    <>
      {/* Recently Aired Episodes */}
      <div className="text-white font-bold m-4 text-3xl md:text-4xl lg:text-5xl">
        Recently Aired Anime
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 m-6 gap-10 sm:grid-cols-5 sm:gap-5">
        {queryResults?.map((anime) => (
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
