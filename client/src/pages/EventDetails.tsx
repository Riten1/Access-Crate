import {
  useEffect,
  //useRef
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  //Group
  NumberInput,
  // NumberInputHandlers
} from "@mantine/core";
import {
  Add01Icon,
  Calendar02Icon,
  Location01Icon,
  MinusSignIcon,
} from "hugeicons-react";

import { EventDetails } from "../@types/events";
// import Header from "../components/ui/Header";
import useEventDetailsQuery from "../services/events/get-event-details-query";
import { formatDate } from "../utils/format-date";

export const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<EventDetails>();
  const navigate = useNavigate();
  const {
    data: eventDetails,
    // isLoading
  } = useEventDetailsQuery(String(id));

  const [ticketCounts, setTicketCounts] = useState<{ [key: string]: number }>(
    {}
  );
  // const handlersRef = useRef<NumberInputHandlers>(null);

  useEffect(() => {
    setEvent(eventDetails?.data);
    if (eventDetails?.data?.tickets) {
      // Initialize ticket count to 0 for each ticket type
      const initialCounts: { [key: string]: number } = {};
      eventDetails.data.tickets.forEach((ticket) => {
        initialCounts[ticket.ticketType] = 0;
      });
      setTicketCounts(initialCounts);
    }
  }, [eventDetails]);

  // Function to update ticket count
  const updateTicketCount = (ticketType: string, newCount: number) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: Math.max(0, newCount), // Ensure count doesn't go below 0
    }));
  };

  // Calculate total tickets and total price
  const totalTickets = Object.values(ticketCounts).reduce(
    (sum, count) => sum + count,
    0
  );
  const totalAmount = event?.tickets.reduce((sum, ticket) => {
    return sum + (ticketCounts[ticket.ticketType] || 0) * ticket.price;
  }, 0);

  return (
    <div className="flex w-full gap-7 bg-supporting-bg-dark px-4 py-28 sm:px-8 md:px-16 md:py-32">
      <div className="flex w-[70%] flex-col gap-4">
        <img
          className="h-[70%] rounded-lg object-cover"
          src={event?.event_pic}
          alt=""
        />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-core-timer px-4 font-semibold">
              {event?.category.name}
            </div>
            <p
              className="text-core-secondary hover:cursor-pointer hover:underline"
              onClick={() => navigate(`/organizer/${event?.organizer._id}`)}
            >
              Organized by {event?.organizer.organizer_name}
            </p>
          </div>

          <p className="text-3xl font-semibold text-core-primary">
            {event?.name}
          </p>

          <div className="flex flex-col gap-4 text-white">
            <div className="flex gap-2">
              <Calendar02Icon className="text-core-primary" />
              <p>{formatDate(event?.date)}</p>
            </div>
            <div className="flex gap-2">
              <Location01Icon className="text-core-primary" />
              <p>{event?.venue}</p>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold text-white">
              About this Event
            </p>
            <p className="text-core-timer">{event?.description}</p>
          </div>
        </div>
      </div>

      {/* Right Section: Ticket Booking */}
      <div className="flex h-full w-[30%] flex-col gap-6 rounded-lg bg-supporting-bg p-4 py-8">
        <p className="text-xl font-semibold text-core-primary">Get Tickets</p>

        {event?.tickets.map((ticket) => (
          <div
            key={ticket.ticketType}
            className="flex flex-col gap-2 rounded-lg bg-supporting-bg-dark px-4 py-6 text-white"
          >
            <div className="flex justify-between">
              <p className="text-base font-medium text-white">
                {ticket.ticketType}
              </p>
              <p>NPR. {ticket.price}</p>
            </div>
            <p className="text-sm text-core-secondary">
              {ticket.ticketType === "VIP"
                ? "Premium viewing area, complimentary drinks"
                : "Standard entry to the event"}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-core-secondary">
                {ticket.quantity - ticket.sold_count} remaining
              </p>
              <div className="flex">
                {/* Decrease Ticket Count */}
                <Button
                  onClick={() =>
                    updateTicketCount(
                      ticket.ticketType,
                      (ticketCounts[ticket.ticketType] || 0) - 1
                    )
                  }
                  className="mr-2 bg-red-500 text-white hover:bg-red-600"
                  style={{
                    color: "white",
                    backgroundColor: "#1D232F",
                    borderWidth: "1px",
                    borderColor: "#525A6C",
                  }}
                >
                  <MinusSignIcon size={12} />
                </Button>

                {/* Number Input */}
                <NumberInput
                  className="w-16 bg-supporting-bg"
                  value={ticketCounts[ticket.ticketType] || 0}
                  onChange={(value) =>
                    updateTicketCount(ticket.ticketType, Number(value))
                  }
                  step={1}
                  min={0}
                  max={ticket.quantity - ticket.sold_count}
                  hideControls
                  styles={{
                    input: {
                      textAlign: "center",
                      backgroundColor: "#1D232F",
                      color: "#ffffff",
                      borderColor: "#444444",
                    },
                  }}
                />

                {/* Increase Ticket Count */}
                <Button
                  onClick={() => {
                    {
                      updateTicketCount(
                        ticket.ticketType,
                        (ticketCounts[ticket.ticketType] || 0) + 1
                      );
                      console.log(ticketCounts);
                    }
                  }}
                  className="ml-2"
                  style={{
                    color: "white",
                    backgroundColor: "#1D232F",
                    borderWidth: "1px",
                    borderColor: "#525A6C",
                  }}
                >
                  <Add01Icon size={12} />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Total Price Section */}
        <div className="px-2 py-4 text-white">
          <div className="flex justify-between">
            <p className="text-white">Total</p>
            <p>NPR. {totalAmount}</p>
          </div>
          <div className="flex justify-between text-sm text-core-secondary">
            <p className="">Tickets</p>
            <p>{totalTickets}</p>
          </div>
        </div>

        {/* Buy Tickets Button */}
        <button
          className="primary-btn font-semibold"
          disabled={totalTickets === 0}
        >
          Buy Tickets {totalTickets > 0 ? `(NPR. ${totalAmount})` : ""}
        </button>

        <hr />

        <div className="flex flex-col gap-2 text-base text-core-secondary">
          <p>Tickets are non-refundable.</p>
          <p>Please arrive 30 minutes before the event starts.</p>
        </div>
      </div>
    </div>
  );
};
