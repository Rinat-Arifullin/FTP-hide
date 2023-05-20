import React from "react";
import { Route, Routes } from "react-router-dom";

import { Notification } from "./components/common/Notification";

import MainPage from "pages/Main";
import Game from "pages/Game";
import Favorites from "pages/Favorites";
import NotFoundPage from "pages/NotFound";

import "./styles/globla.css";

function App() {
  return (
    <div className="App">
      <Notification />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
