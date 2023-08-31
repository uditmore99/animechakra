export const searchAnime = async (animeQuery) => {
  if (animeQuery !== "popular") {
    try {
      const searchData = await fetch(
        // `https://api.consumet.org/meta/anilist/advanced-search?query=${animeQuery}&sort="POPULARITY_DESC"`
        `https://consumet-org-clone.vercel.app/meta/anilist/advanced-search?query=${animeQuery}&sort="POPULARITY_DESC"`
      );

      if (searchData.ok) {
        // console.log(searchData);
        return searchData.json();
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const searchData = await fetch(
        // `https://api.consumet.org/meta/anilist/advanced-search?sort="POPULARITY_DESC"`
        `https://consumet-org-clone.vercel.app/meta/anilist/advanced-search?sort="POPULARITY_DESC"`
      );

      if (searchData.ok) {
        // console.log(searchData);
        return searchData.json();
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
