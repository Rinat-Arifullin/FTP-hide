export interface IGamesSmallList {
  title: string;
  dataSource: Array<IGameSmallItem>;
  loading: boolean;
}

export interface IGameSmallItem {
  id: number;
  num: number;
  img: string; // TODO replace on alias
  title: string;
  subTitle: string;
}
