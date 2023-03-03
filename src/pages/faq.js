import React from "react";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Main from "../components/Main";
import Footer from "../components/Footer";

const FaqPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Faq />
        <Footer/>
      </Main>
    </>
  );
};

export default FaqPage;
