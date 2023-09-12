import Link from "next/link";
import React from "react";
import Image from "next/image";

const SearchAnimeCard = ({
  id,
  title,
  genre,
  imageurl,
  coverUrl,
  description,
  popularity,
  rating,
  releaseDate,
  type,
}) => {
  const displayedGenres = genre.slice(0, 3);

  const finalTitle = id;

  return (
    <Link href={`/info/${finalTitle}`}>
      <div className="bg-white h-full transition hover:scale-105 rounded-xl overflow-hidden relative hover:cursor-pointer shadow-xl ">
        <Image
          width={360}
          height={360}
          className="w-full h-full "
          src={imageurl}
          alt={title}
        />
        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
          <h2 className="text-sm font-semibold text-white md:text-sm lg:text-xl">
            {title}
          </h2>
          <p className="text-gray-300 text-xs lg:text-sm">
            {displayedGenres.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchAnimeCard;
