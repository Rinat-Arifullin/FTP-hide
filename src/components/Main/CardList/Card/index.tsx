import Text from "components/common/Text";
import Button from "components/common/Button";

import { IGamesItemAPI } from "service/game/types";

import { useRouter } from "hooks/useRouter";

import LikeIcon from "static/icons/likeIcon";
import ArrowIcon from "static/icons/ArrowIcon";
import TrashIcon from "static/icons/TrashIcon";

import cx from "./index.module.scss";

export interface ICardProps extends IGamesItemAPI {
  isLiked?: boolean;
  onLike?: (id: IGamesItemAPI & { isLiked?: boolean }) => void;
  onInstall?: (id: ICardProps["game_url"]) => void;
}

const Card = ({
  id,
  game_url,
  thumbnail,
  genre,
  title,
  onLike,
  onInstall,
  isLiked,
  ...rest
}: ICardProps) => {
  const { navigate } = useRouter();

  const goToGame = () => {
    navigate("/game/" + id);
  };

  return (
    <div className={cx.wrapper} onClick={goToGame}>
      <div className={cx.imgWrapper}>
        <img src={thumbnail} alt="img" />
      </div>
      <Text className={cx.text}>{title}</Text>
      <Text size="thin" className={cx.text}>
        {genre}
      </Text>
      <div className={cx.footer}>
        <Button
          theme={isLiked ? "danger" : "success"}
          shape="circle"
          onClick={(e) => {
            e.stopPropagation();
            onLike &&
              onLike({
                id,
                game_url,
                thumbnail,
                genre,
                title,
                isLiked,
                ...rest,
              });
          }}
        >
          {isLiked ? <TrashIcon /> : <LikeIcon />}
        </Button>
        <Button
          shape="circle"
          onClick={(e) => {
            e.stopPropagation();
            onInstall && onInstall(game_url);
          }}
        >
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default Card;
