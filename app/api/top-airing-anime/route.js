import { getAnimeTrailers } from "@/utils/getTopAiringAnimeData";

export const GET = async () => {
  try {
    const response = await getAnimeTrailers();
    console.log("anime trailers are fetch successfully!");

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
