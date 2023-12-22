import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root/RootLayout";
import HomePage from "./pages/Home/HomePage";
import WatchPage from "./pages/Watch/WatchPage";
import WatchLayout from "./pages/Watch/WatchLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "watch",
      element: <WatchLayout />,
      children: [
        {
          path: ":videoId",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
