import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import cx from "./index.module.scss";

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "normal" | "thin" | "bold";
  children: ReactNode;
}

const Text = ({
  children,
  size = "normal",
  onClick,
  className,
  ...rest
}: IProps) => {
  return (
    <p
      className={classNames(
        cx[size],
        cx.text,
        { [cx.pointer]: onClick },
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
