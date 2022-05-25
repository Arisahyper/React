import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Root } from "./components/pages/Root";
import { Sub1 } from "./components/pages/Sub1";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Root />} />
        <Route path="sub1" element={<Sub1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Router };
