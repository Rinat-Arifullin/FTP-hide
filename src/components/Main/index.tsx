import { useMemo, useState } from "react";

import SmallCardList from "components/SmallCardList";
import Heading from "components/common/Heading";
import { ENotificationType } from "components/common/Notification";
import CardList from "./CardList";

import { useAppDispatch } from "store/hooks/redux";
import { addNotification } from "store/notifications/slice";

import { FilterContext, IFiltersContext } from "./context";

import { gameApi } from "service/game/service";
import { IFilters } from "service/game/types";

const Main = () => {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState<IFilters | null>(null);
  const { data, isLoading, error } = gameApi.useFetchGameListQuery({ filters });
  const {
    data: smallList,
    isLoading: isLoadingSmallList,
    error: errorSmallList,
  } = gameApi.useFetchGameListQuery({ filters: null });

  const filterContextValue: IFiltersContext = useMemo(() => {
    return {
      filters,
      setFilters,
    };
  }, [filters]);

  if (error || errorSmallList) {
    dispatch(
      addNotification({
        type: ENotificationType.Error,
        text: "Something went wrong",
      })
    );
    return null;
  }

  return (
    <div>
      <SmallCardList
        title="Games"
        dataSource={smallList || []}
        loading={isLoadingSmallList}
      />
      <Heading>Explore</Heading>
      <FilterContext.Provider value={filterContextValue}>
        <CardList dataSource={data || []} isLoading={isLoading} />
      </FilterContext.Provider>
    </div>
  );
};

export default Main;
