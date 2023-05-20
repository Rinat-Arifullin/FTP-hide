import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";

import Input from "components/common/Input";
import Heading from "components/common/Heading";
import Card from "components/Main/CardList/Card";
import { ENotificationType } from "components/common/Notification";

import CloseIcon from "static/icons/closeIcon";

import { gameApi } from "service/game/service";
import { IGamesItemAPI } from "service/game/types";
import { likedGameApi } from "service/likes/service";

import { useAppDispatch } from "store/hooks/redux";
import { addNotification } from "store/notifications/slice";

import cx from "./index.module.scss";

const Search = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dataSource, setDataSource] = useState<IGamesItemAPI[]>([]);

  const [unlikeGame, { isLoading: isLoadingUnlike }] =
    likedGameApi.useUnlikeGameMutation();
  const [likeGame, { isLoading: isLoadingLike }] =
    likedGameApi.useLikeGameMutation();

  const { data } = gameApi.useFetchGameListQuery({
    filters: null,
  });

  const onLike = async (game: IGamesItemAPI & { isLiked?: boolean }) => {
    if (game.isLiked) {
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

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [visible]);

  useEffect(() => {
    if (data) {
      setDataSource(
        data.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, data]);

  return (
    <div>
      <Input
        search
        placeholder="Search..."
        className={cx.search}
        allowClear
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setVisible(true)}
      />
      <div className={classNames(cx.dropDown, { [cx.visible]: visible })}>
        <span onClick={() => setVisible(false)} className={cx.closeIcon}>
          <CloseIcon />
        </span>

        {!dataSource.length && (
          <Heading className={cx.empty}>No result...</Heading>
        )}

        <div className={cx.cardList}>
          {dataSource.flatMap((card) => {
            if (!card.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return [];
            }
            return (
              <div key={card.id} onClick={() => setVisible(false)}>
                <Card {...card} onLike={onLike} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
