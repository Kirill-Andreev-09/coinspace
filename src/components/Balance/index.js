import React, { useState } from "react";
import { Button } from "antd";
import cn from "classnames";
import { Charts } from "../Charts";

import "./Balance.scss";

const Balance = () => {
  return (
    <div className="balance">
      <div className="container">
        <div className="balance-text">Баланс</div>
        <div className="balance-text">209.92 ₽</div>
        <div className="balance-stats">
          + 150.00 ₽ <span>(+ 50%)</span>
        </div>
      </div>
      <Charts />
    </div>
  );
};

export { Balance };
