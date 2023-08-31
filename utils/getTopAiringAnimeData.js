export const getAnimeTrailers = async (randomNumber) => {
  var trailerUrl;
  try {
    const response = await fetch(
      "https://consumet-org-clone.vercel.app/meta/anilist/trending",
      // "https://api.consumet.org/meta/anilist/trending",

      { method: "GET" }
    );
    if (response.ok) {
      const topAnimeData = await response.json();

      // console.log(randomNumber);
      // console.log(topAnimeData);
      const query = topAnimeData.results[randomNumber]?.id;
      console.log(query);

      try {
        const trailerDataResp = await fetch(
          "https://consumet-org-clone.vercel.app/meta/anilist/info/" + query,
          // "https://api.consumet.org/meta/anilist/info/" + query,

          { method: "GET" }
        );

        if (trailerDataResp.ok) {
          const trailerData = await trailerDataResp.json();
          // console.log(trailerData.trailer.id);
          if (trailerData.hasOwnProperty("trailer")) {
            trailerUrl =
              "https://www.youtube-nocookie.com/embed/" +
              trailerData.trailer.id +
              "?" +
              "loop=1&autoplay=1&mute=1&iv_load_policy=3&modestbranding=1&start=1";
          } else {
            trailerUrl = "useImage";
          }

          // return trailerData.results.data?.[0].trailer.embed_url

          const trailerTitle = trailerData.title.romaji;
          const trailerSynopsis = truncateText(trailerData.description, 360);
          const trailerCover = trailerData.cover;
          const trailerId = trailerData.id;
          const responseData = [
            trailerUrl,
            trailerTitle,
            trailerSynopsis,
            trailerCover,
            trailerId,
          ];
          return responseData;
        }
      } catch (error) {
        console.log(error);
      }

      // return topAnimeData.json();
    } else throw new Error("Failed to fetch data");
  } catch (error) {}
};

export const getTopAiringAnime = async () => {
  try {
    const animeData = await fetch(
      // "https://api.consumet.org/meta/anilist/trending",
      "https:/consumet-org-clone.vercel.app/meta/anilist/trending",

      { method: "GET" }
    );

    if (animeData.ok) {
      // return animeData.results.data?.[0].trailer.embed_url
      return animeData;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRecentAnime = async () => {
  try {
    const animeData = await fetch(
      // "https://api.consumet.org/meta/anilist/recent-episodes?provider=gogoanime",
      "https://consumet-org-clone.vercel.app/meta/anilist/recent-episodes?provider=gogoanime",

      { method: "GET" }
    );

    if (animeData.ok) {
      // return animeData.results.data?.[0].trailer.embed_url
      return animeData;
    }
  } catch (error) {
    console.log(error);
  }
};
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space within the maxLength
  const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

  // If no space is found within the maxLength, return the first maxLength characters
  if (lastSpaceIndex === -1) {
    return text.substring(0, maxLength) + "...";
  }

  // Truncate the text at the last space and add "..."
  return text.substring(0, lastSpaceIndex) + "...";
}
