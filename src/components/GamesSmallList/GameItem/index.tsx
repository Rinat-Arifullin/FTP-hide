import { useNavigate } from "react-router-dom";

import { IGameSmallItem } from "components/GamesSmallList/models";
import Text from "components/common/Text";

import cx from "./index.module.scss";

const GameItem = ({ title, subTitle, img, num, id }: IGameSmallItem) => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game/" + id);
  };

  return (
    <div className={cx.wrapper} onClick={goToGame}>
      <Text>{num}</Text>
      <div className={cx.imgWrapper}>
        <img src={img} alt={"prev"} />
      </div>
      <div className={cx.text}>
        <Text>{title}</Text>
        <Text size="thin">{subTitle}</Text>
      </div>
    </div>
  );
};

export default GameItem;
