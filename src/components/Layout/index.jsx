import Nav from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const storedActive = localStorage.getItem("active");
    setActive(storedActive === "true");
  }, []);

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
