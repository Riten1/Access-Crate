// import JohnProfile from "../assets/jon2.png";
// import JohnCover from "../assets/jonCover.jpg";
import { AboutUs } from "../features/AboutUs";
import { Hero } from "../features/hero-section";
import { FeaturedEvents } from "../features/upcomming-events";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedEvents />
    </>
  );
};

export default Home;
