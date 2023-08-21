import { getAnimeInfo } from "@/utils/infoForAnime";

export const POST = async (request) => {
  try {
    const { animeInfoTitle } = await request.json();
    //   const { animeQuery } = await request.json();
    // console.log("The anime Query is ----> " + animeId);

    const response = await getAnimeInfo(animeInfoTitle);
    // console.log(response);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred.", { status: 500 });
  }
};
