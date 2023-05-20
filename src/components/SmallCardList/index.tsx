import { IGamesSmallList } from "components/SmallCardList/models";
import Heading from "components/common/Heading";
import Empty from "components/common/Empty";
import SmallCard from "components/SmallCardList/SmallCard";
import Loader from "components/common/Loader";

import cx from "./index.module.scss";

const SmallCardList = ({ dataSource, loading, title }: IGamesSmallList) => {
  if (loading) {
    return <Loader />;
  }

  if (!dataSource.length) {
    return <Empty />;
  }

  return (
    <>
      <Heading>{title}</Heading>
      <div className={cx.wrapper}>
        <div className={cx.listWrapper}>
          {dataSource.map((item, index) => (
            <SmallCard key={item.id} {...item} num={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SmallCardList;
