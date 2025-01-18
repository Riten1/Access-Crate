import bgImage from "../assets/bgEvent.jpg";
// import JohnProfile from "../assets/jon2.png";
// import JohnCover from "../assets/jonCover.jpg";
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

      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col-reverse items-center gap-4 lg:flex-row lg:gap-8">
        <div className="md:text:4xl flex w-full flex-col items-center justify-center gap-2 text-center text-3xl font-semibold text-core-primary lg:gap-8 lg:text-5xl">
          <div className="flex flex-col gap-4">
            <h1 className="">John And The Locals</h1>
            {/* <h2 className="text-4xl font-semibold text-white">Live In Nepal</h2> */}
          </div>

          <div className="flex flex-col gap-2">
            <p className="mt-10 text-sm font-medium text-white md:text-base lg:text-lg">
              December 31, 2025
            </p>
            <p className="font-semi text-lg text-white lg:text-xl">
              Hyatt Regency, Kathmandu
            </p>
          </div>

          <button className="primary-btn !w-[200px]">Buy Tickets</button>
        </div>

        <div className="w-[200px] overflow-hidden sm:w-1/2 md:w-1/2 lg:w-full">
          <img src={Johnrai} className="shadow-md" alt="trending" />
        </div>
      </div>
    </div>
  );
};

export default Home;
