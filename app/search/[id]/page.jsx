"use client";

import SearchAnimeCard from "@/components/SearchAnimeCard";

import { useState, useEffect } from "react";

const SearchAnime = ({ params }) => {
  // const [animeId, setAnimeId] = useState("");
  const [animeId, setAnimeId] = useState(convertURLString(params.id));
  const [searchValue, setSearchValue] = useState("");
  const [animeData, setAnimeData] = useState();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setAnimeId(convertURLString(params.id));
  }, [params.id]);

  useEffect(() => {
    document.title = "Search Anime";
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Handle the Enter key press and navigate to the desired URL
      e.preventDefault();

      window.location.href = window.location.origin + "/search/" + searchValue;
    }
  };

  if (animeData) {
    // console.log(animeData);
  }

  return (
    <>
      <div className="sm:mt-24">
        <div className="md:hidden">
          <form>
            <div className="flex gap-3 p-6">
              <div className="flex rounded-md overflow-hidden w-full">
                <input
                  id="searchBox"
                  type="text"
                  className="w-full rounded-md rounded-r-none p-3"
                  placeholder="Enter your search query"
                  value={searchValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
                <a
                  type="button"
                  id="searchButton"
                  className="bg-indigo-600 text-white p-3 text-lg font-semibold rounded-r-md"
                  href={`../search/${searchValue}`}
                >
                  Go
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 m-6 md:m-12 lg:m-18 gap-6 md:gap-6 lg:gap-18  sm:grid-cols-5 sm:gap-5">
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
