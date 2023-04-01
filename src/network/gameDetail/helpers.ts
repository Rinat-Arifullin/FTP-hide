import { IGameListItem } from "./types";
import { ICardProps } from "components/Main/CardList/Card";

export const gameDetailToViewFormat = (data: IGameListItem): ICardProps => {
  return {
    id: data.id,
    imgUrl: data.thumbnail,
    title: data.title,
    subTitle: data.publisher,
  };
};
