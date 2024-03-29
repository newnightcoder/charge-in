import { createBrowserRouter } from "react-router-dom";
import { Archives, DashboardHome, Encours } from "../components";
import { menu } from "../components/Buttons";
import { formatRouteName } from "../helpers";
import { Dashboard, Home, Login, MenuPage, Profil } from "../pages";

const sections = [menu.opportunités, menu.utilisateurs, menu.données];

const menuRoutes = sections.flatMap((section) => {
  const routes = Object.values(section).map((val) => ({
    path: `/dashboard/${formatRouteName(val)}`,
    element: <MenuPage title={val} />,
  }));
  return routes;
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },

      ...menuRoutes.map((route) => ({
        path: route.path,
        element: route.element,
        children: [
          {
            path: `${route.path}/en-cours`,
            element: <Encours />,
          },
          {
            path: `${route.path}/archives`,
            element: <Archives />,
          },
          {
            path: `${route.path}/en-cours/:id`,
            element: <Profil />,
          },
        ],
      })),
    ],
  },
]);
