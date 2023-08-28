"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import OpenPlayerJS from "openplayerjs";
import "openplayerjs/dist/openplayer.css";

const Episode = ({ params }) => {
  const [episodeId, setEpisodeId] = useState(params.episode);
  const [animeData, setAnimeData] = useState();
  const [sources, setSources] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("");
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
        setSources(respData.sources);
        setSelectedQuality("default");
      }
    };
    getSearchData();
  }, [episodeId]);

  useEffect(() => {
    const player = new OpenPlayerJS("player");
    player.init();
  });

  if (animeData) {
    console.log(animeData.sources[4].url);

    return (
      <>
        <div className="relative m-auto md:w-[75%] lg:w-[75%] max-w-5xl sm:mt-24">
          <video
            id="player"
            className="op-player__media absolute top-0 left-0"
            controls
            playsInline
          >
            {/* <source
              src={animeData.sources[3].url}
              type="application/x-mpegURL"
            /> */}

            <source
              src={animeData.sources[3].url}
              type="application/x-mpegURL"
            />
          </video>
          {/* <select
            className="mt-4 p-2 border rounded"
            value={selectedQuality}
            onChange={(e) => setSelectedQuality(e.target.value)}
          >
            {sources.map((source, index) => (
              <option key={index} value={source.quality}>
                {source.quality}
              </option>
            ))}
          </select> */}
        </div>
      </>
    );
  }
};

export default Episode;
