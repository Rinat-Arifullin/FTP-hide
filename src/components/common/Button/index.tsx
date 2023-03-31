import { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";

import cx from "./index.module.scss";

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "primary" | "success";
  shape?: "circle" | "default";
}

const Button = ({
  theme = "primary",
  className,
  children,
  shape = "default",
  ...rest
}: IProps) => {
  return (
    <button
      className={classNames(className, cx.btn, cx[theme], cx[shape])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
