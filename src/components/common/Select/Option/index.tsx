import classNames from "classnames";

import { IOption } from "../models";
import Text from "components/common/Text";

import cx from "./index.module.scss";

const Option = ({ value, label, onClick, active }: IOption) => {
  return (
    <Text
      onClick={() => onClick && onClick(value)}
      className={classNames(cx.option, { [cx.active]: active })}
    >
      {label}
    </Text>
  );
};

export default Option;
