import React from "react";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";
import AlbumDetail from "./components/AlbumDetail";
import "./styles/Responsive.module.css";
import AlbumsList from "./components/AlbumsList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <nav>
          <Link to="/users">Users</Link>
          <Link to="/albums">Albums</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId/albums" element={<UserDetail />} />
          <Route
            path="/users/:userId/albums/:albumId"
            element={<AlbumDetail />}
          />
          <Route path="/albums" element={<AlbumsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
