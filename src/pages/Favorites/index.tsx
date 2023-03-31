import MainLayout from "layouts/MainLayout";

import Heading from "components/common/Heading";
import CardList from "components/Main/CardList";

import { ICardProps } from "components/Main/CardList/Card";

const cardList: ICardProps[] = [];

for (let i = 0; i < 20; i += 1) {
  cardList.push({
    id: i,
    imgUrl: "https://www.freetogame.com/g/517/thumbnail.jpg",
    title: "Lost Ark",
    subTitle: "Amazon Games",
  });
}

const Favorites = () => {
  return (
    <MainLayout>
      <Heading>Favorites</Heading>
      <CardList dataSource={cardList} />
    </MainLayout>
  );
};

export default Favorites;
