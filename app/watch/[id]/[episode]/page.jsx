"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import OpenPlayerJS from "openplayerjs";
import "openplayerjs/dist/openplayer.css";

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

  useEffect(() => {
    const player = new OpenPlayerJS("player");
    player.init();
  });

  if (animeData) {
    console.log(animeData.sources[3].url);
    return (
      // <>
      //   <div className="relative pt-[56.25%] sm:mt-24">
      //     <ReactPlayer
      //       className="absolute top-0 left-0"
      //       playing
      //       width={"100%"}
      //       height={"100%"}
      //       controls={true}
      //       type="application/vnd.apple.mpegurl"
      //       url={animeData.sources[3].url}
      //       // config={{ file: { forceVideo: true } }}
      //     />
      //   </div>
      // </>
      <>
        <div className="relative sm:mt-24">
          <video
            id="player"
            className="op-player__media absolute top-0 left-0"
            controls
            playsInline
          >
            <source
              src={animeData.sources[3].url}
              type="application/x-mpegURL"
            />
          </video>
        </div>
      </>
    );
  }
};

export default Episode;
