import About1 from "../assets/a3246f2e863d7086077c3d969b5810b7.jpg";
import About2 from "../assets/festival_1.jpg";
import Header from "../components/ui/Header";

export const AboutUs = () => {
  return (
    <div className="bg-supporting-bg">
      <div className="px-48 pb-8 pt-20">
        <Header title="About The Access Crate" />
      </div>

      <div className="flex gap-4 overflow-hidden">
        <div className="flex flex-col gap-4 w-full">
          <div className="h-[60%] overflow-hidden">
            <img src={About1} alt="" />
          </div>
          <p className="flex w-full justify-end">
            <div className="w-3/4">
              <p className="text-sm font-semibold text-white">Misson</p>
              <p className="mt-2 text-sm font-normal text-core-secondary">
                At AccessCrate, our mission is to revolutionize the event
                ticketing experience by providing a fast, secure, and
                user-friendly platform that connects event organizers with
                attendees effortlessly. We aim to make event access seamless,
                transparent, and efficient, ensuring a smooth ticketing process
                for all.
              </p>
            </div>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="flex w-full">
            <div className="w-3/4">
              <p className="text-sm font-semibold text-white">Experience</p>
              <p className="mt-2 text-sm font-normal text-core-secondary">
                At AccessCrate, we are dedicated to creating an effortless and
                enjoyable event ticketing experience for both attendees and
                organizers. Our platform is designed to simplify ticket
                purchasing, enhance event management, and provide real-time
                insights, making every interaction seamless and efficient.
              </p>
            </div>
          </p>
          <div className="h-[60%] overflow-hidden">
            <img src={About2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
