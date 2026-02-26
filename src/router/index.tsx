import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import CharacterDetail from "../pages/CharacterDetail";
import { homeLoader } from "./loaders/homeLoader";
import { characterDetailLoader } from "./loaders/characterDetailLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "character/:id",
        element: <CharacterDetail />,
        loader: characterDetailLoader,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
