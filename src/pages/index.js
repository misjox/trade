import React, { useEffect } from "react";
import Header from "../components/Header";
import Trade from "../components/Trade/Trade";
import "../styles/main.scss";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Reserve from "../components/Reserve";
import axios from "axios";
// const extIP = require("ext-ip");
import { publicIpv4 } from "public-ip";

const IndexPage = () => {
  useEffect(() => {
    publicIpv4()
      .then((ip) => {
        axios.post(`${process.env.REACT_APP_SERVER}/logger/async`, {
          ip: ip,
        });
      })
      .catch(() => {
        axios.post(`${process.env.REACT_APP_SERVER}/logger/async`, {
          ip: "Null",
        });
      });
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Trade />
        <Reserve />
      </Main>
      <Footer />
    </>
  );
};
export default IndexPage;
