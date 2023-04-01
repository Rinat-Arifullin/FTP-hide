import axios from "axios";

interface IRequest {
  method?: "GET" | "POST" | "DELETE" | "PUT";
  url: string;
  params?: Record<string, string | number>;
}

const API_KEY = "2af398ea7emsh9f3e35cfbc2aac7p11f3a2jsn913fe048945d" as const;
const FTP_BASE_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/" as const;
const FTP_HOST = "free-to-play-games-database.p.rapidapi.com" as const;

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": FTP_HOST,
};

export const request = <T>({
  method = "GET",
  url,
  params,
}: IRequest): Promise<T> => {
  const options = {
    method,
    url: FTP_BASE_URL + url,
    params,
    headers,
  };

  return axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
