import JohnCover from "../assets/jonCover.jpg";

const Home = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black/100 via-black/50 to-transparent"></div>

      <img
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        src={JohnCover}
        alt="Cover"
      />
    </div>
  );
};

export default Home;
