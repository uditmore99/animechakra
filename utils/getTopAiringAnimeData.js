export const getTopAiringAnime = async () => {
  try {
    const animeData = await fetch(
      "https://api.consumet.org/anime/gogoanime/top-airing",
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

export const getAnimeTrailers = async () => {
  try {
    const response = await fetch(
      "https://api.consumet.org/anime/gogoanime/top-airing",
      { method: "GET" }
    );
    if (response.ok) {
      const topAnimeData = await response.json();
      var randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      console.log(topAnimeData);
      const query = topAnimeData.results?.[randomNumber].id;
      console.log(query);

      try {
        const trailerDataResp = await fetch(
          "https://api.jikan.moe/v4/anime?q=" + query,
          { method: "GET" }
        );

        if (trailerDataResp.ok) {
          // return trailerData.results.data?.[0].trailer.embed_url
          const trailerData = await trailerDataResp.json();
          const trailerUrl =
            "https://www.youtube-nocookie.com/embed/" +
            trailerData.data?.[0].trailer.embed_url
              ?.split("/")
              .pop()
              .split("?")[0] +
            "?" +
            "loop=1&autoplay=1&mute=1&iv_load_policy=3&modestbranding=1&start=1";

          const trailerTitle = trailerData.data?.[0].title;
          const trailerSynopsis = truncateText(
            trailerData.data?.[0].synopsis,
            600
          );
          const responseData = [trailerUrl, trailerTitle, trailerSynopsis];
          return responseData;
        }
      } catch (error) {
        console.log(error);
      }

      // return topAnimeData.json();
    } else throw new Error("Failed to fetch data");
  } catch (error) {}
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
