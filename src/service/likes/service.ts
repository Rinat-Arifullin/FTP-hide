import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGameDetailAPI, IGamesItemAPI } from "service/game/types";
import { LIKED_LIST_ALIAS } from "./types";

export const likedGameApi = createApi({
  reducerPath: LIKED_LIST_ALIAS,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: [LIKED_LIST_ALIAS],
  endpoints: (builder) => ({
    fetchLikedGames: builder.query<Array<IGamesItemAPI | IGameDetailAPI>, void>(
      {
        query: () => ({
          url: `liked`,
        }),
        providesTags: [LIKED_LIST_ALIAS],
      }
    ),
    likeGame: builder.mutation<void, IGamesItemAPI | IGameDetailAPI>({
      query: (game) => ({
        url: `liked`,
        method: "POST",
        body: { ...game, isLiked: true },
      }),
      invalidatesTags: [LIKED_LIST_ALIAS],
    }),
    unlikeGame: builder.mutation<void, IGamesItemAPI | IGameDetailAPI>({
      query: (game) => ({
        url: `liked/${game.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [LIKED_LIST_ALIAS],
    }),
  }),
});
