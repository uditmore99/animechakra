export const getEpisodeDetails = async (episodeId) => {
  try {
    const response = await fetch(
      `https://consumet-api-clone-kappa.vercel.app/meta/anilist/watch/${episodeId}`,
      // `https://api.consumet.org/meta/anilist/watch/${episodeId}`,

      { method: "GET" }
    );

    if (response.ok) {
      try {
        const getEpisodeData = await response.json();
        return getEpisodeData;
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
