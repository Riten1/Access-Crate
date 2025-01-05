import Home from "../../pages/Home";
export interface IRoute {
  id: string
  path: string;
  element: React.FC;
}

export const userRoutes :IRoute[] = [
  {
    id: "home",
    path: "/",
    element: Home,
  },
];