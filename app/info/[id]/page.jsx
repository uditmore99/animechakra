"use client";

import { getAnimeInfo } from "@/utils/infoForAnime";
import { useEffect, useState } from "react";

const DetailsPage = ({ params }) => {
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
        const respData = await serRes?.json();
        setAnimeInfoData(await respData);
        // console.log(animeInfoData);
      }
    };
    getAnimeInfoData();
  }, [animeInfoTitle]);

  if (animeInfoData) {
    const { title, description, genres, image, cover } = animeInfoData;

    document.title = title.userPreferred;
    return (
      <>
        <div
          style={{
            "--image-url": `url(${image})`,
            "--cover-url": `url(${cover})`,
          }}
          className="absolute inset-0 z-[-50] md:w-[98vw] w-screen h-screen bg-cover bg-center brightness-90 filter blur-3xl bg-[image:var(--image-url)] md:bg-[image:var(--cover-url)] sm:bg-[image:var(--cover-url)]"
        />

        <div className="relative z-10 min-h-screen flex flex-col sm:flex-row items-center justify-center">
          {/* Left Section */}
          <div className="max-w-lg w-1/2">
            <div className="flex flex-col justify-center items-center sm:items-start space-y-4 p-4">
              <img
                src={image}
                alt="Image"
                className="w-full h-fit rounded-2xl object-cover"
              />
              <div className="flex justify-center space-x-2">
                {genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 py-1 px-2 rounded-lg text-sm mr-2 mb-2"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-6 sm:mt-0 sm:ml-4 sm:w-1/2">
            <div className="flex flex-col items-center sm:items-start space-y-4 p-4">
              <h2 className="text-5xl text-white font-semibold drop-shadow-2xl leading-tight mb-2">
                {title.userPreferred}
              </h2>
              <p
                className="text-white font-semibold drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DetailsPage;

//http://localhost:3000/info/jujutsu-kaisen
