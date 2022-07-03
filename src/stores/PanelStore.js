import { observable, action, makeObservable } from "mobx";
import { navigate } from "@reach/router";
import { stores } from "../contexts";
import { routeUrl } from "../constants";
import { wsGetUser } from "../ws/messageSender";

export class PanelStore {
  loading = false;
  activePanel = "dashboard";
  activeTab = "dashboard";

  setActivePanel = (value, idPage = "") => {
    this.activePanel = value;
    const startPath = idPage ? `${value}/` : value;
    navigate(`${routeUrl}${startPath}${idPage}`);
  };

  setActiveTab = (value) => {
    this.activeTab = value;
    navigate(`${routeUrl}/${value}`);
  };

  resetStore = () => {
    this.activePanel = "dashboard";
    this.activeTab = "dashboard";
    this.loading = false;
  };

  constructor() {
    makeObservable(this, {
      loading: observable,
      activePanel: observable,
      activeTab: observable,
      setActivePanel: action,
      setActiveTab: action,
      resetStore: action,
    });
  }
}
