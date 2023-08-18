import { searchAnime } from "@/utils/searchAnimeAnilist";

export const POST = async (request) => {
  try {
    const { animeId } = await request.json();
    //   const { animeQuery } = await request.json();
    // console.log("The anime Query is ----> " + animeId);

    const response = await searchAnime(animeId);
    // console.log(response);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred.", { status: 500 });
  }
};
