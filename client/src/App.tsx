import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
