import React from "react";
import ReactDOM from "react-dom";

import BasicLayout from "@/layouts/BasicLayout"
import IndexPage from "@/pages/IndexPage";


const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render((
  <BasicLayout>
    <IndexPage />
  </BasicLayout>
), container);