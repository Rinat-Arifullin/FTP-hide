import Filters from "./Filters";
import Card, { ICardProps } from "./Card";

import cx from "./index.module.scss";

interface IProps {
  dataSource: ICardProps[];
}

const CardList = ({ dataSource }: IProps) => {
  const onLike = (id: string | number) => {
    console.log(id);
  };
  return (
    <div>
      <Filters />
      <div className={cx.list}>
        {dataSource.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
