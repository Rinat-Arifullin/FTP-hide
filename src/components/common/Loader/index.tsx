import React from "react";

import LoaderIcon from "static/icons/LoaderIcon";

import cx from "./index.module.scss";

const Loader = () => {
  return (
    <div className={cx.wrapper}>
      <LoaderIcon />
    </div>
  );
};

export default Loader;
