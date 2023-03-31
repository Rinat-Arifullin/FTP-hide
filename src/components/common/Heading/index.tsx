import { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";

import cx from "./index.module.scss";

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag?: "h1" | "h2";
}

const Heading = ({
  children,
  tag = "h1",
  className,
  onClick,
  ...props
}: IProps) => {
  const classes = classNames(cx.heading, cx[tag], className, {
    [cx.pointer]: onClick,
  });

  switch (tag) {
    case "h1":
      return (
        <h1 className={classes} {...props} onClick={onClick}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classes} {...props} onClick={onClick}>
          {children}
        </h2>
      );
  }
};

export default Heading;
