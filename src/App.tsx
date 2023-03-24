import { useState } from "react";
import "./styles/uistyle.scss";
import "./styles/responsive.scss";
import { Outlet } from "react-router-dom";
import Header from "./UI/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
