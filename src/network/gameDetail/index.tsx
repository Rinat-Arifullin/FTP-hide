import { request } from "network";

import { IGameListItem } from "./types";
import { gameDetailToViewFormat } from "./helpers";
import { ICardProps } from "components/Main/CardList/Card";

export const getGamesListRequest = async (): Promise<ICardProps[]> => {
  try {
    const res = await request<IGameListItem[]>({ url: "games" });
    return res.map(gameDetailToViewFormat);
  } catch (error) {
    console.error(error);
    throw new Error("ooops!");
  }
};
