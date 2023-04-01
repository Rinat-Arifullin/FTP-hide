import { useNavigate } from "react-router-dom";

import Text from "components/common/Text";
import Button from "components/common/Button";

import cx from "./index.module.scss";

import LikeIcon from "static/icons/likeIcon";
import ArrowIcon from "static/icons/ArrowIcon";

export interface ICardProps {
  id: string | number;
  imgUrl: string;
  title: string;
  subTitle: string;
  onLike?: (id: ICardProps["id"]) => void;
  onInstall?: (id: ICardProps["id"]) => void;
}

const Card = ({
  id,
  imgUrl,
  title,
  subTitle,
  onLike,
  onInstall,
}: ICardProps) => {
  const navigation = useNavigate();

  const goToGame = () => {
    navigation("/game/" + id);
  };

  return (
    <div className={cx.wrapper} onClick={goToGame}>
      <div className={cx.imgWrapper}>
        <img src={imgUrl} alt="img" />
      </div>
      <Text className={cx.text}>{title}</Text>
      <Text size="thin" className={cx.text}>
        {subTitle}
      </Text>
      <div className={cx.footer}>
        <Button
          theme="success"
          shape="circle"
          onClick={(e) => {
            e.stopPropagation();
            onLike && onLike(id);
          }}
        >
          <LikeIcon />
        </Button>
        <Button
          shape="circle"
          onClick={(e) => {
            e.stopPropagation();
            onInstall && onInstall(id);
          }}
        >
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default Card;
