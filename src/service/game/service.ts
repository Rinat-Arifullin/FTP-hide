import { API_KEY, FTP_BASE_URL, FTP_HOST } from "network";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GAME_LIST_ALIAS,
  IFilters,
  IGameDetailAPI,
  IGamesItemAPI,
} from "./types";

export const gameApi = createApi({
  reducerPath: GAME_LIST_ALIAS,
  baseQuery: fetchBaseQuery({
    baseUrl: FTP_BASE_URL,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": FTP_HOST,
    },
  }),
  endpoints: (builder) => ({
    fetchGameList: builder.query<IGamesItemAPI[], { filters: IFilters | null }>(
      {
        query: (params) => {
          if (params?.filters) {
            const qs =
              "?" +
              new URLSearchParams(
                params?.filters as Record<string, string>
              ).toString();
            return "games" + qs;
          }
          return "games";
        },
        transformResponse: (response: IGamesItemAPI[]) => {
          return response;
        },
      }
    ),
    fetchGameDetail: builder.query<IGameDetailAPI, { id: string }>({
      query: ({ id }) => `game?id=${id}`,
    }),
  }),
});
