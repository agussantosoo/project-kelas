import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pagess/Home";
import ListMenu from "./Pagess/ListMenu";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ListMenu />} path="/list-menu" />
    </Routes>
  );
}

export default App;
