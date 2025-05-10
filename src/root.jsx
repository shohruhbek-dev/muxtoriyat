import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Members from "./pages/Members";
import MemberDetail from "./components/Card/memberDetail";
import Articles from "./pages/Articles";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import ArticleDetail from "./components/Card/articleDetailCard";

function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/members" element={<Members />} />
        <Route path="/member/:id" element={<MemberDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Images" element={<Images />} />
        {/* <Route path="/article/:id" element={<Articles />} /> */}
      </Routes>
    </Layout>
  );
}

export default Root;
