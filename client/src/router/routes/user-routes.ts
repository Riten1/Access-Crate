import { AboutUs } from "../../pages/AboutUs";
import { EventDetailsPage } from "../../pages/EventDetails";
import { Events } from "../../pages/Events";
import Home from "../../pages/Home";
import { OrganizerDetails } from "../../pages/OrganizerDetails";
import { Organizers } from "../../pages/Organizers";

export interface IRoute {
  id: string;
  path: string;
  element: React.FC;
}

export const userRoutes: IRoute[] = [
  {
    id: "home",
    path: "/",
    element: Home,
  },

  {
    id: "login",
    path: "/login",
    element: Home,
  },
  {
    id: "event",
    path: "/event/:id",
    element: EventDetailsPage,
  },
  {
    id: "organizer",
    path: "/organizer/:id",
    element: OrganizerDetails,
  },
  {
    id: "events",
    path: "/events",
    element: Events,
  },
  {
    id: "about-us",
    path: "/about-us",
    element: AboutUs,
  },
  {
    id: "organizers",
    path: "/organizers",
    element: Organizers,
  },
];
