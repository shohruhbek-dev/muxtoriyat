import Nav from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
