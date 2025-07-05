import { Outlet } from "react-router-dom";
import NavBars from "./navbars";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 min-h-screen flex flex-col">
      <NavBars />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}