import React, { ReactNode } from "react";

import Header from "./Header";

import cx from "./index.module.scss";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
