import { useEffect, useState } from "react";

import Input from "components/common/Input";
import Heading from "components/common/Heading";
import Card, { ICardProps } from "components/Main/CardList/Card";

import CloseIcon from "static/icons/closeIcon";

import cx from "./index.module.scss";
import classNames from "classnames";

const dataSource: ICardProps[] = [];

for (let i = 0; i < 20; i += 1) {
  dataSource.push({
    id: i,
    imgUrl: "https://www.freetogame.com/g/517/thumbnail.jpg",
    title: "Lost Ark" + i,
    subTitle: "Amazon Games",
  });
}

const Search = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [visible]);

  return (
    <div>
      <Input
        search
        placeholder="Search..."
        className={cx.search}
        allowClear
        onFocus={() => setVisible(true)}
      />
      <div className={classNames(cx.dropDown, { [cx.visible]: visible })}>
        <span onClick={() => setVisible(false)} className={cx.closeIcon}>
          <CloseIcon />
        </span>

        {!dataSource.length && (
          <Heading className={cx.empty}>No result...</Heading>
        )}

        <div className={cx.cardList}>
          {dataSource.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
