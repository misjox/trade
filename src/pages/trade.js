import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TradeRusult from "../components/Trade/TradeResult";

const Trade = () => {
  return (
    <>
      <Header />
      <Main>
        <TradeRusult />
      </Main>
      <Footer />
    </>
  );
};

export default Trade;
