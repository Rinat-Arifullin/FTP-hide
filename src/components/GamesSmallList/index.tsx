import { IGamesSmallList } from "components/GamesSmallList/models";

import Heading from "components/common/Heading";
import GameItem from "components/GamesSmallList/GameItem";

import cx from "./index.module.scss";

const GamesSmallList = ({ dataSource, loading, title }: IGamesSmallList) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Heading>{title}</Heading>
      <div className={cx.wrapper}>
        <div className={cx.listWrapper}>
          {dataSource.map((item) => (
            <GameItem key={item.num} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesSmallList;
