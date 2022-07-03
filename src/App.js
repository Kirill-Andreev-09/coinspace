import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Router, Redirect } from "@reach/router";
import { Snackbar, Avatar } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Icon16Done from "@vkontakte/icons/dist/16/done";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";
import { Button, notification } from "antd";
import { routeUrl } from "./constants";

import "./ws/connection.js";

import "antd/dist/antd.css";
import "./index.scss";

import {
  Dashboard,
  Exchange,
  ProjectInfo,
  Wallet,
  CoinInfo,
  CreateCoin,
  ParentComponent,
} from "./panels";

import { observer } from "mobx-react-lite";
import { useStores } from "./hooks/useStores";

import { SocketManager } from "./utils";
import { BASE_WS_URL } from "./api/consts";

import { vkValidationParams } from "./constants";

import { RootModal } from "./components/Modals/RootModal";
import { Footer, Header } from "./components";
import { WalletIcon, ExchangeIcon, DashboardIcon } from "./Icons";
import { toJS } from "mobx";

const App = observer(() => {
  // Стейт запуска
  const isDesktop = window.innerWidth >= 1000;
  const { UserStore, SnackbarStore, WsStore, PanelStore } = useStores();
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);
  const [wsConnecting, setWsConnecting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
    <>
      <Router basepath={`${routeUrl === "" ? "/" : routeUrl}`}>
        <Dashboard path="dashboard" />
        <Exchange path="exchange" />
        <Wallet path="wallet" />
        <CreateCoin path="create-coin" />
        <ProjectInfo path="project-id/:page" />
        <CoinInfo path="coin-id/:page" />
        <Redirect from="/" to={`${routeUrl}/dashboard`} noThrow />
      </Router>
      <Footer />
      <RootModal />
    </>
  );
});

export default App;
