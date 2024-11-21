import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Track />} />
      </Routes>
    </Router>
  );
};

const Home = () => <h1>Home Page</h1>;

const Track = () => (
  <div>
    <iframe
      src="/track.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Track Page"
    />
  </div>
);

export default App;
