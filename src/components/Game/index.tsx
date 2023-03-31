import Slider from "components/common/Slider";
import Heading from "components/common/Heading";
import Button from "components/common/Button";
import Text from "components/common/Text";
import GamesSmallList from "components/GamesSmallList";
import { IGameSmallItem } from "components/GamesSmallList/models";

import ArrowIcon from "static/icons/ArrowIcon";
import LikeIcon from "static/icons/likeIcon";

import cx from "./index.module.scss";

const imgaes: string[] = [
  "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg",
  "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg",
  "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg",
  "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg",
];

const mockData: IGameSmallItem[] = [];

for (let i = 0; i < 30; i++) {
  mockData.push({
    id: i,
    num: i,
    img: "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg",
    title: "War Zone",
    subTitle: "sub title",
  });
}

const GameLayout = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.flex}>
        <div className={cx.slider}>
          <Slider images={imgaes} />
        </div>
        <div>
          <div className={cx.flex}>
            <Heading>Call Of Duty: Warzone</Heading>
            <Button>
              install <ArrowIcon />
            </Button>
            <Button shape="circle" theme="success">
              <LikeIcon />
            </Button>
          </div>
          <Heading tag="h2">Minimum system requirements</Heading>
          <div className={cx.row}>
            <Text size="thin">Storage</Text>
            <Text size="bold" className={cx.infoText}>
              175GB HD space
            </Text>
          </div>
          <div className={cx.row}>
            <Text size="thin">Graphics</Text>
            <Text size="bold" className={cx.infoText}>
              NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950
            </Text>
          </div>
          <div className={cx.row}>
            <Text size="thin">Memory</Text>
            <Text size="bold" className={cx.infoText}>
              8GB RAM
            </Text>
          </div>
          <div className={cx.row}>
            <Text size="thin">Processor</Text>
            <Text size="bold" className={cx.infoText}>
              Intel Core i3-4340 or AMD FX-6300
            </Text>
          </div>
          <div className={cx.row}>
            <Text size="thin">OS</Text>
            <Text size="bold" className={cx.infoText}>
              Windows 7 64-Bit (SP1) or Windows 10 64-Bit
            </Text>
          </div>
        </div>
      </div>

      <div>
        <Heading>Description</Heading>
        <Text>
          Call of Duty: Warzone is both a standalone free-to-play battle royale
          and modes accessible via Call of Duty: Modern Warfare. Warzone
          features two modes — the general 150-player battle royle, and
          “Plunder”. The latter mode is described as a “race to deposit the most
          Cash”. In both modes players can both earn and loot cash to be used
          when purchasing in-match equipment, field upgrades, and more. Both
          cash and XP are earned in a variety of ways, including completing
          contracts. An interesting feature of the game is one that allows
          players who have been killed in a match to rejoin it by winning a 1v1
          match against other felled players in the Gulag. Of course, being a
          battle royale, the game does offer a battle pass. The pass offers
          players new weapons, playable characters, Call of Duty points,
          blueprints, and more. Players can also earn plenty of new items by
          completing objectives offered with the pass.
        </Text>
      </div>

      <GamesSmallList
        title={"Recommendation"}
        dataSource={mockData}
        loading={false}
      />
    </div>
  );
};

export default GameLayout;
