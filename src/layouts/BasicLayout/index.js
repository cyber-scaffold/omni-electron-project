/* eslint-disable react/prop-types */
import React from "react";
// import { Button } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <div>{children}</div>
  )
};


BasicLayout.propTypes = {

};

BasicLayout.defaultProps = {

};