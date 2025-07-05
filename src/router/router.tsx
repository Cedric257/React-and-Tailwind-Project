import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Services from "../components/services";
import News from "../components/news";
import Doctors from "../components/doctors";
import Contact from "../components/contact";
import Layout from "../global/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "doctors", element: <Doctors /> },
      { path: "news", element: <News /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}