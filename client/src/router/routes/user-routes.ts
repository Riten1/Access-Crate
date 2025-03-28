import { EventDetailsPage } from "../../pages/EventDetails";
import Home from "../../pages/Home";
import { OrganizerDetails } from "../../pages/OrganizerDetails";

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
];
