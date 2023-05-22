/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
// import { Button } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export function BasicLayout(props) {
  return (
    <div>
      <Outlet />
    </div>
  )
};


BasicLayout.propTypes = {

};

BasicLayout.defaultProps = {

};