import { Navigate, createBrowserRouter } from "react-router-dom";
import { FirstPage } from "./pages/first/FirstPage";
import { SecondPage } from "./pages/second/SecondPage";
import { ThirdPage } from "./pages/third/ThirdPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/code",
    element: <SecondPage />,
  },
  {
    path: "/auth",
    element: <ThirdPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
]);