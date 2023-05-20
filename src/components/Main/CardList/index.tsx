import Filters from "./Filters";
import Card from "./Card";
import Loader from "components/common/Loader";
import Empty from "components/common/Empty";
import { ENotificationType } from "components/common/Notification";

import { IGamesItemAPI } from "service/game/types";
import { likedGameApi } from "service/likes/service";

import { useAppDispatch } from "store/hooks/redux";
import { addNotification } from "store/notifications/slice";

import cx from "./index.module.scss";

interface IProps {
  dataSource: Array<IGamesItemAPI & { isLiked?: boolean }>;
  isLoading: boolean;
  withoutFilters?: boolean;
}

const CardList = ({ dataSource, isLoading, withoutFilters }: IProps) => {
  const dispatch = useAppDispatch();
  const [unlikeGame, { isLoading: isLoadingUnlike }] =
    likedGameApi.useUnlikeGameMutation();
  const [likeGame, { isLoading: isLoadingLike }] =
    likedGameApi.useLikeGameMutation();

  const onLike = async (game: IGamesItemAPI & { isLiked?: boolean }) => {
    if (game && game.isLiked) {
      await unlikeGame(game);
      dispatch(
        addNotification({
          type: ENotificationType.Default,
          text: game.title + " removed from your liked games",
        })
      );
      return;
    }
    if (game) {
      await likeGame(game);
      dispatch(
        addNotification({
          type: ENotificationType.Success,
          text: game.title + " liked!",
        })
      );
    }
  };

  const goToInstall = (game_url: string) => {
    window.location.href = game_url;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!dataSource.length) {
    return <Empty />;
  }

  return (
    <div>
      {!withoutFilters && <Filters />}
      <div className={cx.list}>
        {dataSource.map((card) => (
          <Card
            key={card.id}
            {...card}
            onLike={onLike}
            onInstall={goToInstall}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
