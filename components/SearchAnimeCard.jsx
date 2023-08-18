import React from "react";

const SearchAnimeCard = ({ id, title, genre, imageUrl }) => {
  const displayedGenres = genre.slice(0, 3);

  return (
    <div className="bg-white transition hover:scale-110 rounded-xl overflow-hidden relative hover:cursor-pointer shadow-xl ">
      <img className="w-full h-full " src={imageUrl} alt={title} />
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
        <h2 className="text-sm font-semibold text-white md:text-sm lg:text-xl">
          {title}
        </h2>
        <p className="text-gray-300 text-xs lg:text-sm">
          {displayedGenres.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SearchAnimeCard;
