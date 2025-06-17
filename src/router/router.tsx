import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  // { path: '/about', element: <About /> },
  // { path: '/services', element: <Services /> },
  // { path: '/doctors', element: <Doctors /> },
  // { path: '/news', element: <News /> },
  // { path: '/contact', element: <Contact /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}