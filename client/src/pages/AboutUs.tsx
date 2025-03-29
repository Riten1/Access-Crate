import About1 from "../assets/a3246f2e863d7086077c3d969b5810b7.jpg";
import About2 from "../assets/festival_1.jpg";
import Header from "../components/ui/Header";

export const AboutUs = () => {
  return (
    <div className="flex flex-col w-full gap-7 bg-supporting-bg-dark px-16 py-20">
      <div className="p-12 md:px-24 md:pb-8 md:pt-16 lg:px-40 lg:pb-8 lg:pt-20">
        <Header title="About The Access Crate" />
      </div>

      <div className="flex flex-col gap-4 overflow-hidden p-12 pt-0 md:flex-row md:p-12 md:pt-0 lg:flex-row lg:p-0">
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="h-[60%] overflow-hidden">
            <img
              src={About1}
              alt="About AccessCrate"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex justify-end">
            <div className="w-full md:w-3/4">
              <p className="text-sm font-semibold text-white">Mission</p>
              <p className="mt-2 text-sm font-normal text-core-secondary">
                At AccessCrate, our mission is to revolutionize the event
                ticketing experience by providing a fast, secure, and
                user-friendly platform that connects event organizers with
                attendees effortlessly. We aim to make event access seamless,
                transparent, and efficient, ensuring a smooth ticketing process
                for all.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col-reverse gap-4 md:w-1/2 lg:flex lg:flex-col">
          <div className="w-full md:w-3/4">
            <p className="text-sm font-semibold text-white">Experience</p>
            <p className="mt-2 text-sm font-normal text-core-secondary">
              At AccessCrate, we are dedicated to creating an effortless and
              enjoyable event ticketing experience for both attendees and
              organizers. Our platform is designed to simplify ticket
              purchasing, enhance event management, and provide real-time
              insights, making every interaction seamless and efficient.
            </p>
          </div>
          <div className="h-[60%] overflow-hidden">
            <img
              src={About2}
              alt="Festival Experience"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
