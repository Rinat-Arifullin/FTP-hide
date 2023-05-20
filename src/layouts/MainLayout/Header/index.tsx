import { useRouter } from "hooks/useRouter";

import Heading from "components/common/Heading";
import Text from "components/common/Text";
import Search from "./Search";

import cx from "./index.module.scss";

const Header = () => {
  const { location, navigate } = useRouter();

  const toMainPage = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const toFavoritesPage = () => {
    navigate("/favorites");
  };

  const toProfilePage = () => {
    navigate("/profile");
  };

  return (
    <div className={cx.wrapper}>
      <Heading onClick={toMainPage}>Free To Play</Heading>
      <Search />
      <div className={cx.nav}>
        <Text onClick={toFavoritesPage}>Favorites</Text>
      </div>
    </div>
  );
};

export default Header;
