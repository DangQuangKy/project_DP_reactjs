import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./Error";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { PublicRoute } from "../../Routes/publicRoute";

const DefaultLayout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {PublicRoute}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
