import { useLocation, useNavigate } from "react-router-dom";

import Heading from "components/common/Heading";
import Input from "components/common/Input";
import Text from "components/common/Text";

import ProfileSvg from "static/icons/Profile";
import cx from "./index.module.scss";
import Search from "./Search";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
        <div onClick={toProfilePage}>
          <ProfileSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
