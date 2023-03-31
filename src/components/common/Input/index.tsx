import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";

import SearchIcon from "static/icons/search";

import cx from "./index.module.scss";
import CloseIcon from "../../../static/icons/closeIcon";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  search?: boolean;
  allowClear?: boolean;
}

const Input = ({ className, search, allowClear, ...props }: IProps) => {
  return (
    <div className={cx.wrapper}>
      {search && (
        <span className={cx.iconWrapper}>
          <SearchIcon />
        </span>
      )}
      <input
        className={classNames(className, cx.input, { [cx.search]: search })}
        {...props}
      />
    </div>
  );
};

export default Input;
