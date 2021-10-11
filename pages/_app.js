import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import propTypes from "prop-types";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>SIXWEEKS</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default App;
