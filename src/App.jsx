import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import TrailerPage from "./trailerPage";
import MovieCard from "./MovieCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index path="/movielist" element={<MovieList />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/moviecard" element={<MovieCard />} />
          <Route path="/trailerpage" element={<TrailerPage />} />
        </Route>
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
