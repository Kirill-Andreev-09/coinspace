import React, { useState, useEffect } from "react";
import { Header, Balance } from "../../components";
import { Projects } from "./Projects";
import { useUpToScroll } from "../../utils";

import "./Dashboard.scss";

const Dashboard = () => {
  useUpToScroll();
  return (
    <>
      <Header title="Проекты"></Header>
      <div className="dashboard">
        <div className="dashboard__main">
          <Balance />
          <Projects />
        </div>
      </div>
    </>
  );
};

export { Dashboard };
