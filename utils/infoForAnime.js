export const getAnimeInfo = async (animeInfoTitle) => {
  try {
    const response = await fetch(
      `https://consumet-api-clone-kappa.vercel.app/meta/anilist/info/${animeInfoTitle}`,
      // `https://api.consumet.org/meta/anilist/info/${animeInfoTitle}`,

      { method: "GET" }
    );

    if (response.ok) {
      try {
        const getAnimeInfoData = await response.json();

        return getAnimeInfoData;
      } catch (error) {
        console.log(error);
      }

      // return animeData.results.data?.[0].trailer.embed_url
      // return response;
    }
  } catch (error) {
    console.log(error);
  }
};
