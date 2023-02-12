import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

const Root = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Root;
