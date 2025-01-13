import bgImage from "../assets/bgEvent.jpg";
import JohnProfile from "../assets/jon2.png";
import JohnCover from "../assets/jonCover.jpg";
import Johnrai from "../assets/jonRaiEvent.png";

const Home = () => {
  return (
    <div className="relative h-full w-full">
      {/* <div className="absolute z-10 h-full w-full bg-black opacity-35"></div> */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-black/100 via-black/50 to-transparent"></div>

      <img
        className="absolute left-0 top-0 z-0 h-full w-full object-cover blur-[2.5px]"
        src={bgImage}
        alt="Cover"
      />

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex">
        <div className="flex w-full flex-col items-center justify-center gap-8 text-center text-6xl font-semibold text-core-primary">
          <div className="flex flex-col gap-4">
            <h1 className="">John And The Locals</h1>
            {/* <h2 className="text-4xl font-semibold text-white">Live In Nepal</h2> */}
          </div>

          <div className="flex flex-col gap-2">
            <p className="mt-10 text-xl font-medium text-white">
              December 31, 2025
            </p>
            <p className="font-semi text-2xl text-white">
              Hyatt Regency, Kathmandu
            </p>
          </div>

          <button className="primary-btn !w-[200px]">Buy Tickets</button>
        </div>

        <div className="w-[900px] overflow-hidden">
          <img src={Johnrai} className="shadow-md" alt="trending" />
        </div>
      </div>
    </div>
  );
};

export default Home;
