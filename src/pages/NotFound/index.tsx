import { Link } from "react-router-dom";

import Heading from "components/common/Heading";

const NotFoundPage = () => {
  return (
    <div>
      <Heading>404</Heading>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default NotFoundPage;
