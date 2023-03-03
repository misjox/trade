import React from "react";
import Header from "../components/Header";
import WarningComponent from "../components/WarningComponent";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Warning = () => {
  return (
    <>
      <Header />
      <Main>
        <WarningComponent />
      </Main>
      <Footer />
    </>
  );
};

export default Warning;
