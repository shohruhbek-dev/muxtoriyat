import Nav from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const active = localStorage.getItem("active");
  return (
    <>
      {active && (
        <marquee className="text-[#ff0000] fixed z-30 text-2xl font-bold">
          Diqqat! Parol xavfsizligi tahdid ostida. Iltimos, uni o‘zgartiring.
        </marquee>
      )}
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
