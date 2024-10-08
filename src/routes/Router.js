import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "../components/Dashboard";
import ConntectWallet from "../components/ConntectWallet";
import Diamanet from "../components/Diamanet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<ConntectWallet />} />
        <Route path="/diamante" element={<Diamanet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
