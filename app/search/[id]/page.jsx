"use client";

import SearchAnimeCard from "@/components/SearchAnimeCard";
import { useState, useEffect } from "react";

const SearchAnime = ({ params }) => {
  const [animeId, setAnimeId] = useState(convertURLString(params.id));

  useEffect(() => {
    setAnimeId(convertURLString(params.id));
  }, [params.id]);

  return (
    <>
      {" "}
      <div>The name of anime is {animeId}</div>
      <br />
      <SearchAnimeCard />
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
