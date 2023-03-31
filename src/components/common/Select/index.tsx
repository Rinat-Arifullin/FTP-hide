import { ISelectProps } from "./models";
import { useMemo, useState } from "react";
import classNames from "classnames";

import Option from "components/common/Select/Option";
import Text from "components/common/Text";

import SelectArrow from "static/icons/SelectArrow";
import CloseIcon from "static/icons/closeIcon";

import cx from "./index.module.scss";

const Select = ({
  options,
  placeHolder,
  value,
  defaultValue,
  onChange,
  allowClear,
}: ISelectProps) => {
  const [valueInner, setValue] = useState(value || defaultValue);
  const [visibleOption, setVisibleOption] = useState(false);

  const optionsHash = useMemo(() => {
    return options.reduce((acc: Record<string, string>, cur) => {
      acc[cur.value] = cur.label;
      return acc;
    }, {});
  }, [options]);

  const toggleVisibleOption = () => {
    setVisibleOption((state) => !state);
  };

  const onChangeValue = (value: string) => {
    setValue(optionsHash[value]);
    if (onChange) {
      onChange(value);
    }
  };

  const onClearValue = () => {
    setValue(placeHolder || "");
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div
      className={classNames(cx.wrapper, {
        [cx.withValue]: valueInner && valueInner !== placeHolder,
      })}
    >
      <div className={cx.header}>
        <Text onClick={toggleVisibleOption}>
          {value || valueInner || placeHolder}
        </Text>
        <div className={cx.icons}>
          {allowClear && (
            <div
              onClick={onClearValue}
              className={classNames(
                { [cx.hide]: !valueInner || valueInner === placeHolder },
                cx.closeIcon
              )}
            >
              <CloseIcon />
            </div>
          )}
          <div
            className={classNames(cx.arrow, { [cx.arrowDown]: visibleOption })}
            onClick={toggleVisibleOption}
          >
            <SelectArrow />
          </div>
        </div>
      </div>
      <div
        className={classNames(cx.options)}
        style={{ height: visibleOption ? `${options.length * 35}px` : 0 }}
      >
        {options.map((option) => (
          <Option
            onClick={onChangeValue}
            value={option.value}
            label={option.label}
            active={option.label === valueInner}
            key={option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;
