import Link from "next/link";
import React from "react";

const EpisodeCard = ({ id, episodeid, title, description, number, image }) => {
  return (
    <Link href={`/watch/${id}/${episodeid}`}>
      <div className="bg-white transition hover:scale-110 rounded-lg overflow-hidden relative hover:cursor-pointer shadow-xl ">
        <img className="w-full h-full" src={image} alt={title} />
        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
          <h2 className="text-xs  text-white md:text-base lg:text-2xl">
            {number}. {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
