import React from "react";
import ReactDOM from "react-dom";

import IndexPage from "@/application/pages/IndexPage";


const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render((<IndexPage />), container);