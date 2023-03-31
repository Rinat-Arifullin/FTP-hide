import GamesSmallList from "components/GamesSmallList";
import { IGameSmallItem } from "components/GamesSmallList/models";
import Heading from "components/common/Heading";

import CardList from "./CardList";
import { ICardProps } from "./CardList/Card";

const mockDataSource: IGameSmallItem[] = [];
const cardList: ICardProps[] = [];

for (let i = 0; i < 20; i += 1) {
  cardList.push({
    id: i,
    imgUrl: "https://www.freetogame.com/g/517/thumbnail.jpg",
    title: "Lost Ark",
    subTitle: "Amazon Games",
  });
}

for (let i = 0; i < 20; i += 1) {
  mockDataSource.push({
    id: i,
    num: i,
    title: "title " + i,
    subTitle: "sub title " + i,
    img: "https://www.freetogame.com/g/452/thumbnail.jpg",
  });
}

const Main = () => {
  return (
    <div>
      <GamesSmallList
        title="Games"
        dataSource={mockDataSource}
        loading={false}
      />
      <Heading>Explore</Heading>
      <CardList dataSource={cardList} />
    </div>
  );
};

export default Main;
