import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Members from "./pages/Members";
import MemberDetail from "./components/Card/memberDetail";
import Articles from "./pages/Articles";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import ArticleDetail from "./components/Card/articleDetailCard";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import WritePage from "./pages/Write";
import Profile from "./pages/Profile";
import "quill/dist/quill.snow.css";

function Root() {
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, [token]);

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/auth" />;
    }
    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDetail />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="history" element={<History />} />
          <Route path="members" element={<Members />} />
          <Route path="member/:id" element={<MemberDetail />} />
          <Route
            path="/write"
            element={
              <ProtectedRoute>
                <WritePage />
              </ProtectedRoute>
            }
          />
        <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/auth" element={token ? <Navigate to="/" /> : <Auth />} />
      </Routes>
    </>
  );
}

export default Root;
