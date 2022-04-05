import React from "react";
import {Outlet} from "react-router-dom";
import Updater from "@app/store/reducers/updaters";

const PrivateRoute = () => {
  return (
    <>
      <Updater />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
