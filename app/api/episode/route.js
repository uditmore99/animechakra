import { getEpisodeDetails } from "@/utils/getEpisodeDetails";

export const POST = async (request) => {
  try {
    const { episodeId } = await request.json();
    const response = await getEpisodeDetails(episodeId);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred.", { status: 500 });
  }
};
