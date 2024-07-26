import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<>hi</>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
