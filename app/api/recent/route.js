import axios from "axios";

export const GET = async (request) => {
  try {
    const data = await axios.get(
      "https://consumet-org-clone.vercel.app/meta/anilist/recent-episodes?provider=gogoanime"
    );

    return new Response(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred.", { status: 500 });
  }
};
