import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Members from "./pages/Members";
import MemberDetail from "./components/Card/memberDetail";
import Articles from "./pages/Articles";

function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/members" element={<Members />} />
        <Route path="/member/:id" element={<MemberDetail />} />
        <Route path="/article" element={<Articles />} />
        {/* <Route path="/article/:id" element={<Articles />} /> */}
      </Routes>
    </Layout>
  );
}

export default Root;
