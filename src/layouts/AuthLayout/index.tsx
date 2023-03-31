import { ReactNode } from "react";

import Heading from "components/common/Heading";

import cx from "./index.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  children: ReactNode;
}

const AuthLayout = ({ title, children }: IProps) => {
  const navigation = useNavigate();
  const goToHomePage = () => {
    navigation("/");
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <Heading onClick={goToHomePage}>Free To Play</Heading>
      </div>
      <div className={cx.contentWrapper}>
        <Heading>{title}</Heading>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
