import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMePage from "./pages/AboutMe";
import HomePage from "./pages/Home";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-me', element: <AboutMePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
