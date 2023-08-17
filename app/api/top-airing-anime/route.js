import { getAnimeTrailers } from "@/utils/getTopAiringAnimeData";

export const POST = async (request) => {
  try {
    const { randomNumber } = await request.json();
    const response = await getAnimeTrailers(randomNumber);
    console.log(response);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred.", { status: 500 });
  }
};
