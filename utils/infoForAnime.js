export const getAnimeInfo = async (animeInfoTitle) => {
  try {
    const response = await fetch(
      `https://api.consumet.org/meta/anilist/advanced-search?id=${animeInfoTitle}`,
      { method: "GET" }
    );

    if (response.ok) {
      try {
        const getAnimeInfoData = await response.json();
        const animeInfoData = getAnimeInfoData.results?.[0];
        console.log(animeInfoData);
        return animeInfoData;
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
