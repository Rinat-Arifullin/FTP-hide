import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useRouter = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  return {
    params,
    navigate,
    location,
  };
};
