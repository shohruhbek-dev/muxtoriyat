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
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
