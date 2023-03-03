import React from "react";
import Header from "../components/Header";
import RulesComponent from "../components/RulesComponent";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Rules = () => {
  return (
    <>
      <Header />
      <Main>
        <RulesComponent />
      </Main>
      <Footer />
    </>
  );
};

export default Rules;
