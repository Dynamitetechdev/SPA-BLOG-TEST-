import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UkNews from "./UI/UK-news";
import USNews from "./UI/US-news";
import NewsDetails from "./UI/NewsDetailed";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/uknews" element={<UkNews />} />
          <Route path="/usnews" element={<USNews />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
