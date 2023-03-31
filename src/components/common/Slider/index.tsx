import { useState } from "react";
import classNames from "classnames";

import cx from "./index.module.scss";

interface IProps {
  images: string[];
}

const Slider = ({ images }: IProps) => {
  const [activeImg, setActiveImg] = useState(images[0]);
  return (
    <div className={cx.wrapper}>
      {images.map((url) => (
        <div
          key={url}
          className={classNames(
            { [cx.active]: url === activeImg },
            cx.imgWrapper
          )}
          onClick={() => setActiveImg(url)}
        >
          <img src={url} alt={"img"} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
