
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IRoute, userRoutes } from "./routes/user-routes";
import ClientLayout from "../layout/layout";

function Router() {
 

  return (
    <BrowserRouter>
      <Routes>
       
          {userRoutes.map((route : IRoute) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                <ClientLayout>
                  <route.element />
                </ClientLayout>
                   
                 
                }
              />
            ))
          }

        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;