import React from "react";
import Header from "../components/Header";
import Reserve from "../components/Reserve";
import "../styles/main.scss";
import Main from "../components/Main";
import Footer from "../components/Footer";

const ReservePage = () => {
  return (
    <>
      <Header />
      <Main>
        <Reserve />
        <Footer/>
      </Main>
    </>
  );
};

export default ReservePage;
