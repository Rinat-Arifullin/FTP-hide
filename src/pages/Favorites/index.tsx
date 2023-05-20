import MainLayout from "layouts/MainLayout";
import Heading from "components/common/Heading";
import CardList from "components/Main/CardList";

import { gameApi } from "service/game/service";
import { IFilters } from "service/game/types";

import { useEffect, useState } from "react";
import { likedGameApi } from "service/likes/service";

const Favorites = () => {
  const [filters, setFilters] = useState<IFilters | null>(null);

  const {
    data: cardList,
    isLoading,
    error,
    refetch,
  } = likedGameApi.useFetchLikedGamesQuery();

  useEffect(() => {
    refetch();
  }, []);

  if (error) {
    console.log(error);
    return <Heading>Error</Heading>;
  }

  return (
    <MainLayout>
      <Heading>Favorites</Heading>
      <CardList
        dataSource={cardList || []}
        isLoading={isLoading}
        withoutFilters
      />
    </MainLayout>
  );
};

export default Favorites;
