"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Episode = ({ params }) => {
  const [episodeId, setEpisodeId] = useState(params.episode);
  const [animeData, setAnimeData] = useState();
  useEffect(() => {
    setEpisodeId(params.episode);
  }, [params.episode]);

  useEffect(() => {
    document.title = "Watch Now";
    const getSearchData = async () => {
      const serRes = await fetch(`/api/episode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ episodeId }),
      });
      if (serRes.ok) {
        const respData = await serRes.json();

        setAnimeData(await respData);
      }
    };
    getSearchData();
  }, [episodeId]);

  if (animeData) {
    console.log(animeData.sources[3].url);
    return (
      <>
        <div className="relative pt-[56.25%] sm:mt-24">
          <ReactPlayer
            className="absolute top-0 left-0"
            playing
            width={"100%"}
            height={"100%"}
            controls={true}
            type="application/x-mpegURL"
            url={animeData.sources[3].url}
          />
        </div>
      </>
    );
  }
};

export default Episode;
