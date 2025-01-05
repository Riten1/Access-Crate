
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IRoute, userRoutes } from "./routes/user-routes";

function Router() {
 

  return (
    <BrowserRouter>
      <Routes>
       
          {userRoutes.map((route : IRoute) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                 
                    <route.element />
                 
                }
              />
            ))
          }

        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;