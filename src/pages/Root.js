import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-W6G2VVJ'
}

TagManager.initialize(tagManagerArgs)


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
