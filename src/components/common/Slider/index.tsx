import { useState } from "react";
import classNames from "classnames";

import { Screenshot } from "service/game/types";

import cx from "./index.module.scss";

interface IProps {
  screenshots: Screenshot[];
}

const Slider = ({ screenshots }: IProps) => {
  const [activeImg, setActiveImg] = useState(screenshots[0].id);
  return (
    <div className={cx.wrapper}>
      {screenshots.map((screen) => (
        <div
          key={screen.id}
          className={classNames(
            { [cx.active]: screen.id === activeImg },
            cx.imgWrapper
          )}
          onClick={() => setActiveImg(screen.id)}
        >
          <img src={screen.image} alt={"img"} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
