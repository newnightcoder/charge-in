import { createBrowserRouter } from "react-router-dom";
import { DashboardHome } from "../components";
import { menu } from "../components/Buttons";
import { formatRouteName } from "../helpers";
import { Dashboard, Home, Login, Profil } from "../pages";

const sections = [menu.opportunités, menu.utilisateurs, menu.données];

const menuRoutes = sections.flatMap((section) => {
  const routes = Object.values(section).map((val) => ({
    path: `/dashboard/${formatRouteName(val)}`,
    element: <>{val}</>,
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
      {
        path: "/dashboard/profil",
        element: <Profil />,
      },
      ...menuRoutes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    ],
  },
]);
