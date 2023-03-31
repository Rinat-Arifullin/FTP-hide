import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "pages/Main";
import Game from "pages/Game";
import Favorites from "pages/Favorites";
import ProfilePage from "pages/Profile";
import Auth from "pages/Auth";
import NotFoundPage from "pages/NotFound";

import "./styles/globla.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
