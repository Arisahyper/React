import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          {/* <Route path="page1" element={<SamplePage1 />} />
        <Route path="page2" element={<SamplePage2 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
