import { IGamesItemAPI } from "service/game/types";

export interface IGamesSmallList {
  title: string;
  dataSource: IGamesItemAPI[];
  loading: boolean;
}
