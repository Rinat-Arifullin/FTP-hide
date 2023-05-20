import Slider from "components/common/Slider";
import Heading from "components/common/Heading";
import Button from "components/common/Button";
import Text from "components/common/Text";
import SmallCardList from "components/SmallCardList";
import Loader from "components/common/Loader";

import MinSysReq from "./MinSysReq";

import ArrowIcon from "static/icons/ArrowIcon";
import LikeIcon from "static/icons/likeIcon";

import { gameApi } from "service/game/service";
import { ECategory } from "service/game/types";
import { likedGameApi } from "service/likes/service";

import { useAppDispatch } from "store/hooks/redux";

import cx from "./index.module.scss";
import { useRouter } from "hooks/useRouter";
import { addNotification } from "../../store/notifications/slice";
import { ENotificationType } from "../common/Notification";

const GameLayout = () => {
  const dispatch = useAppDispatch();
  const { params } = useRouter();

  const {
    data: gameDetailData,
    isLoading,
    error,
  } = gameApi.useFetchGameDetailQuery({ id: params.id as string });

  const {
    data: gameList,
    isLoading: isLoadingGameList,
    error: errorGameList,
  } = gameApi.useFetchGameListQuery({
    filters: { category: gameDetailData?.genre.toLowerCase() as ECategory },
  });

  const [likeGame] = likedGameApi.useLikeGameMutation();

  const goToInstall = () => {
    if (gameDetailData?.game_url) {
      window.location.href = gameDetailData.game_url;
    }
  };

  const onLike = async () => {
    if (gameDetailData) {
      await likeGame(gameDetailData);
      dispatch(
        addNotification({
          type: ENotificationType.Success,
          text: gameDetailData.title + " liked!",
        })
      );
    }
  };

  if (isLoading || !gameDetailData) {
    return <Loader />;
  }

  return (
    <div className={cx.wrapper}>
      <div className={cx.flex}>
        <div className={cx.slider}>
          <Slider screenshots={gameDetailData?.screenshots} />
        </div>
        <div>
          <div className={cx.flex}>
            <Heading>{gameDetailData.title}</Heading>
            <Button className={cx.link} onClick={goToInstall}>
              install <ArrowIcon />
            </Button>
            <Button shape="circle" theme="success" onClick={onLike}>
              <LikeIcon />
            </Button>
          </div>

          <MinSysReq {...gameDetailData.minimum_system_requirements} />
        </div>
      </div>

      <div>
        <Heading>Description</Heading>
        <Text>{gameDetailData.short_description}</Text>
      </div>
      {!errorGameList && (
        <SmallCardList
          title={"Recommendation"}
          dataSource={gameList || []}
          loading={isLoadingGameList}
        />
      )}
    </div>
  );
};

export default GameLayout;
