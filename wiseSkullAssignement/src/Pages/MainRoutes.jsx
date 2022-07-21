import React from "react";
import { Route, Routes } from "react-router-dom";
import Private from "../components/Private";
import Editpage from "./Editpage";
import Homepage from "./Homepage";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={
        <Private>
          <Homepage />
        </Private>} />
      <Route path='/login' element={<Login />} />
      <Route path="/country/:id" element={<Editpage />} />
    </Routes>
  );
};

export default MainRoutes;
