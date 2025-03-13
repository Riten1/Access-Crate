import  { useEffect, useState } from "react";

import { Carousel } from "@mantine/carousel";
import { Location01Icon, Ticket02Icon, Time02Icon } from "hugeicons-react";

import bgImage from "../../assets/bgEvent.jpg";
import CarouselView from "../../components/ui/Carousel";
import { Loading } from "../../components/ui/Loading";
import useGetHeroUpcommingEventsQuery from "../../services/hero-section/get-upcomming-events";
import { formatDate } from "../../utils/format-date";

const CountdownTimer = ({
  eventDate,
}: {
  eventDate: string | Date | number;
}) => {
  const calculateTimeLeft = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    if (isNaN(difference) || difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="mt-4 w-full text-center text-lg font-semibold text-white">
      {timeLeft ? (
        <div className="flex items-center justify-center gap-4">
          <div>
            <div className="bg-core-timer rounded-md px-4 py-1 text-supporting-bg-dark">
              {timeLeft.days}
            </div>
            days
          </div>
          <div>
            <div className="bg-core-timer rounded-md px-4 py-1 text-supporting-bg-dark">
              {timeLeft.hours}
            </div>
            hours
          </div>
          <div>
            <div className="bg-core-timer rounded-md px-4 py-1 text-supporting-bg-dark">
              {timeLeft.minutes}
            </div>
            minutes
          </div>
        </div>
      ) : (
        <p>Event Started</p>
      )}
    </div>
  );
};

export default CountdownTimer;

export const Hero = () => {
  const { data: upcommingEvents, isLoading } = useGetHeroUpcommingEventsQuery();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/100 via-black/50 to-transparent"></div>
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover blur-[2.5px]"
        src={bgImage}
        alt="Cover"
      />
      {isLoading ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Loading />
        </div>
      ) : upcommingEvents && upcommingEvents.data.length > 0 ? (
        <div className="relative z-20 flex w-full items-center justify-center">
          <CarouselView>
            {upcommingEvents.data.map((event) => (
              <Carousel.Slide
                key={event._id}
                className="flex w-full justify-center"
              >
                <div className="flex w-full items-center justify-center gap-8 text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-center text-3xl font-semibold text-core-primary lg:text-5xl">
                      {event.name}
                    </h1>
                    <div className="flex w-full flex-col items-center justify-center">
                      <div className="mt-16 flex gap-2">
                        <Time02Icon className="h-6 w-6 text-core-primary" />
                        <p className="w-full text-center text-sm font-medium text-white md:text-base lg:text-base">
                          {formatDate(event.date)}
                        </p>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Location01Icon className="h-6 w-6 text-core-primary" />
                        <p className="flex w-full items-center justify-center text-center text-base font-semibold text-white lg:text-base">
                          {event.venue}
                        </p>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Ticket02Icon className="h-6 w-6 text-core-primary" />
                        <p className="text-base font-semibold text-white">
                          NPR. {event.ticketRange.lowest} - NPR.{" "}
                          {event.ticketRange.highest}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <button className="primary-btn mt-4 !w-[200px] items-center justify-center font-semibold">
                        Buy Tickets
                      </button>
                    </div>
                    <CountdownTimer eventDate={event.date} />
                  </div>
                  <div className="w-full max-w-[400px] lg:max-w-[500px]">
                    <img
                      src={event.event_pic}
                      className="w-full shadow-md"
                      alt={event.name}
                    />
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </CarouselView>
        </div>
      ) : (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <p className="text-white">No upcoming events</p>
        </div>
      )}
    </div>
  );
};
