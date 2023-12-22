import { Fragment } from "react";
import { Outlet } from "react-router";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className="d-flex">
        <Nav />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default RootLayout;
