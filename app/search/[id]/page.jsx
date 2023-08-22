"use client";

import SearchAnimeCard from "@/components/SearchAnimeCard";

import { useState, useEffect } from "react";

const SearchAnime = ({ params }) => {
  // const [animeId, setAnimeId] = useState("");
  const [animeId, setAnimeId] = useState(convertURLString(params.id));

  const [animeData, setAnimeData] = useState();

  document.title = "Search Anime";

  useEffect(() => {
    setAnimeId(convertURLString(params.id));
  }, [params.id]);

  useEffect(() => {
    const getSearchData = async () => {
      const serRes = await fetch(`/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animeId }),
      });
      if (serRes.ok) {
        const respData = await serRes.json();

        setAnimeData(await respData?.results);
        //  setAnimeTitle(response?.results?.[0].title?.userPreferred);
      }
    };
    getSearchData();
  }, [animeId]);

  if (animeData) {
    // console.log(animeData);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 m-6 gap-10 sm:grid-cols-5 sm:gap-5">
        {animeData?.map((anime) => (
          <SearchAnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.title.userPreferred}
            genre={anime?.genres.map((genre) => " " + genre + " ")}
            imageurl={anime.image}
            coverUrl={anime.cover}
            description={anime.description}
            popularity={anime.popularity}
            rating={anime.rating}
            releaseDate={anime.releaseDate}
            type={anime.type}
          />
        ))}
      </div>
    </>
  );
};

export default SearchAnime;

function convertURLString(inputString) {
  // Decode the URL string
  const decodedString = decodeURIComponent(inputString);

  // Replace spaces with dashes
  const stringWithDashes = decodedString.replace(/\s+/g, "-");

  // Convert all caps to lowercase
  const lowercaseString = stringWithDashes.toLowerCase();

  // Replace any non-alphanumeric characters with dashes
  const dashedString = lowercaseString.replace(/[^a-z0-9-]+/g, "-");

  // Replace consecutive dashes with a single dash
  const finalString = dashedString.replace(/-+/g, "-");

  return finalString;
}
