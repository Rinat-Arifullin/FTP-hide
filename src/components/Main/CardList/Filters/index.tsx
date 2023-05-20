import { useContext } from "react";

import Select from "components/common/Select";

import {
  categoriesOptions,
  platformsOptions,
  sortedOptions,
} from "constats/filters";

import { ECategory, EPlatform, ESortBy, IFilters } from "service/game/types";

import cx from "./index.module.scss";
import { FilterContext } from "../../context";

const Filters = () => {
  const filterContext = useContext(FilterContext);

  const setFiltersState = (value: IFilters) => {
    const filteredData: IFilters = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value)
    );
    filterContext?.setFilters(filteredData);
  };

  return (
    <div className={cx.wrapper}>
      <Select
        options={categoriesOptions}
        placeHolder="Categories"
        allowClear
        onChange={(value) =>
          setFiltersState({
            ...filterContext?.filters,
            category: value as ECategory,
          })
        }
      />
      <Select
        options={platformsOptions}
        placeHolder="Platform"
        allowClear
        onChange={(value) =>
          setFiltersState({
            ...filterContext?.filters,
            platform: value as EPlatform,
          })
        }
      />
      <Select
        options={sortedOptions}
        placeHolder="Sorted"
        allowClear
        onChange={(value) =>
          setFiltersState({
            ...filterContext?.filters,
            "sort-by": value as ESortBy,
          })
        }
      />
    </div>
  );
};

export default Filters;
