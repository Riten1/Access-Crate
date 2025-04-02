// import JohnProfile from "../assets/jon2.png";
// import JohnCover from "../assets/jonCover.jpg";
import { AboutUs } from "../features/AboutUs";
import { FeaturedEvents } from "../features/featured-events";
import { Hero } from "../features/hero-section";
import { OurPartners } from "../features/OurPartners";
import { TopOrganizers } from "../features/TopOrganizers";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedEvents />
      <TopOrganizers />
      <OurPartners />
    </>
  );
};

export default Home;
