import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { Router, Redirect } from "@reach/router";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";

import "./Projects.scss";

const mockProject = [
  {
    id: 1,
    img: "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
    name: "MDK",
    description: "MDK Coin - коины самого крупного паблика вконтакте!",
    date: "11.11.2021",
  },
  {
    id: 2,
    img: "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
    name: "Френдзона",
    description: "FRZ - коины самого крупного паблика френдзоны вконтакте!",
    date: "21.11.2021",
  },
];

const Projects = observer(() => {
  const { PanelStore } = useStores();

  return (
    <div className="projects">
      <div className="projects-header">Активные</div>

      <div className="projects-list">
        {mockProject.map((item) => {
          return (
            <div className="projects-list__item" key={item.id}>
              <img className="img" src={item.img} alt="img" />
              <div className="item-container">
                <div className="info">Проекта: {item.name}</div>
                <Tooltip title={item.description}>
                  <div className="info description">{item.description}</div>
                </Tooltip>
                <div className="info">Старт продажи: {item.date}</div>
                <Button
                  className="btn primary"
                  onClick={() =>
                    PanelStore.setActivePanel("/project-id", item.id)
                  }
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export { Projects };
