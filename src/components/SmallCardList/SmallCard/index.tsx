import Text from "components/common/Text";

import { useRouter } from "hooks/useRouter";

import { IGamesItemAPI } from "service/game/types";

import cx from "./index.module.scss";

const SmallCard = ({
  title,
  publisher,
  thumbnail,
  num,
  id,
}: IGamesItemAPI & { num: number }) => {
  const { navigate } = useRouter();

  const goToGame = () => {
    navigate("/game/" + id);
  };

  return (
    <div className={cx.wrapper} onClick={goToGame}>
      <Text>{num}</Text>
      <div className={cx.imgWrapper}>
        <img src={thumbnail} alt={"prev"} />
      </div>
      <div className={cx.text}>
        <Text>{title}</Text>
        <Text size="thin">{publisher}</Text>
      </div>
    </div>
  );
};

export default SmallCard;
