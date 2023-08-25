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
        try {
          const respData = await serRes.json();
          setAnimeInfoData(await respData);
        } catch (error) {
          console.log(error);
          location.reload();
        }
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
        <div className="sm:mt-24">
          <div
            style={{
              "--image-url": `url(${image})`,
              "--cover-url": `url(${cover})`,
            }}
            className="fixed inset-0 z-[-50] md:w-[98vw] w-screen h-screen bg-cover bg-center brightness-90 filter blur-3xl bg-[image:var(--image-url)] md:bg-[image:var(--cover-url)] sm:bg-[image:var(--cover-url)]"
          />

          <div className="relative z-10 min-h-screen flex flex-col sm:flex-row items-center justify-center">
            {/* Left Section */}
            <div className="max-w-lg w-2/3">
              <div className="flex flex-col justify-center items-center sm:items-start space-y-4 p-4">
                <img
                  src={image}
                  alt="Image"
                  className=" w-full h-fit rounded-2xl object-cover"
                />
                <div className="md:flex lg:flex  justify-center grid grid-cols-2 space-x-2 m-auto ">
                  {genres.map((genre, index) => (
                    <span
                      key={index}
                      className=" min-w-fit bg-gray-200 py-1 px-2 rounded-lg text-center text-sm m-2 "
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="mt-0 md:mt-6 lg:mt-6 sm:ml-4 sm:w-1/2">
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
        </div>
      </>
    );
  }
};

export default DetailsPage;

//http://localhost:3000/info/jujutsu-kaisen
