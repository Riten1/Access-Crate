import JohnCover from "../assets/jonCover.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-full">
     
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/100 via-black/50 to-transparent z-10"></div>
     
      <img className="absolute top-0 left-0 h-full w-full object-cover z-0" src={JohnCover} alt="Cover" />
    </div>
  );
};

export default Home;
