import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { BasicLayout } from "@/layouts/BasicLayout";
import { IndexPage } from "@/pages/IndexPage";

const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render((
  <HashRouter>
    <Routes>
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/home" element={(<IndexPage />)} />
      </Route>
    </Routes>
  </HashRouter>
), container);