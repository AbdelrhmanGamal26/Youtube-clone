import { Fragment } from "react";
import { Outlet } from "react-router";

import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const WatchLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default WatchLayout;
