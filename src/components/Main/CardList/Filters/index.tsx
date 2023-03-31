import Select from "components/common/Select";

import {
  categoriesOptions,
  platformsOptions,
  sortedOptions,
} from "constats/filters";

import cx from "./index.module.scss";

const Filters = () => {
  return (
    <div className={cx.wrapper}>
      <Select options={categoriesOptions} placeHolder="Categories" allowClear />
      <Select options={platformsOptions} placeHolder="Platform" allowClear />
      <Select options={sortedOptions} placeHolder="Sorted" allowClear />
    </div>
  );
};

export default Filters;
