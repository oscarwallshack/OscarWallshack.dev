import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AboutMePage from "./pages/AboutMe";
import HomePage from "./pages/Home";
import Root from "./pages/Root";

const AboutMePage = lazy(() => import("./pages/AboutMe"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about-me",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <AboutMePage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
