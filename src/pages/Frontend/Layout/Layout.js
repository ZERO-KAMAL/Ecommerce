import React from "react";
import Footer from "../../../components/FrontComponent/Footer";
import Header from "../../../components/FrontComponent/Header";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
