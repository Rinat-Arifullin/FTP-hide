import { createContext, Dispatch, SetStateAction } from "react";
import { IFilters } from "service/game/types";

export interface IFiltersContext {
  filters: IFilters | null;
  setFilters: Dispatch<SetStateAction<IFilters | null>>;
}

export const FilterContext = createContext<IFiltersContext | null>(null);
