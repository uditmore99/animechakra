"use client";

import EpisodeCard from "@/components/EpisodeCard";
import { useEffect, useState } from "react";

const Watch = ({ params }) => {
  const [animeInfoData, setAnimeInfoData] = useState();
  const [animeInfoTitle, setAnimeInfoTitle] = useState(params.id);

  useEffect(() => {
    const getAnimeInfoData = async () => {
      const serRes = await fetch(`/api/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animeInfoTitle }),
      });

      //   const serRes = await getAnimeInfo(animeInfoTitle);

      if (serRes.ok) {
        try {
          const respData = await serRes.json();
          setAnimeInfoData(await respData);
        } catch (error) {
          console.log(error);
          //   location.reload();
        }
        // console.log(animeInfoData);
      }
    };
    getAnimeInfoData();
  }, [animeInfoTitle]);

  if (animeInfoData) {
    const { id, episodes } = animeInfoData;
    episodes.sort((a, b) => a.number - b.number);
    return (
      <>
        <div className="sm:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 m-6 md:m-12 lg:m-18 gap-6 md:gap-6 lg:gap-18  sm:grid-cols-5 sm:gap-5">
            {episodes?.map((anime) => (
              <EpisodeCard
                key={anime.id}
                id={id}
                episodeid={anime.id}
                title={anime.title}
                image={anime.image}
                description={anime.description}
                number={anime.number}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Watch;
