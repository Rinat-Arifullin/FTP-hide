import Heading from "components/common/Heading";
import Text from "components/common/Text";

import { MinimumSystemRequirements } from "service/game/types";

import cx from "../index.module.scss";

const MinSysReq = ({
  memory,
  os,
  storage,
  processor,
  graphics,
}: MinimumSystemRequirements) => {
  return (
    <>
      <Heading tag="h2">Minimum system requirements</Heading>
      {storage && (
        <div className={cx.row}>
          <Text size="thin">Storage</Text>
          <Text size="bold" className={cx.infoText}>
            {storage}
          </Text>
        </div>
      )}
      <div className={cx.row}>
        <Text size="thin">Graphics</Text>
        <Text size="bold" className={cx.infoText}>
          {graphics}
        </Text>
      </div>
      <div className={cx.row}>
        <Text size="thin">Memory</Text>
        <Text size="bold" className={cx.infoText}>
          {memory}
        </Text>
      </div>
      <div className={cx.row}>
        <Text size="thin">Processor</Text>
        <Text size="bold" className={cx.infoText}>
          {processor}
        </Text>
      </div>
      <div className={cx.row}>
        <Text size="thin">OS</Text>
        <Text size="bold" className={cx.infoText}>
          {os}
        </Text>
      </div>
    </>
  );
};

export default MinSysReq;
