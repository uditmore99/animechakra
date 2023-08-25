import PopularAnime from "@/components/PopularAnime";
import RecentlyAiredAnime from "@/components/RecentlyAiredAnime";
import VideoCarousel from "@/components/VideoCarousel";

const Home = () => (
  <section>
    <VideoCarousel />
    <PopularAnime />
    <RecentlyAiredAnime />
  </section>
);

export default Home;
