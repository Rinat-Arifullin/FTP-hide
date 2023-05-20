export type TUrlString = string;
export type TDateString = string;

export const GAME_LIST_ALIAS = "gameListAlias" as const;

export interface IGamesItemAPI {
  id: number;
  title: string;
  thumbnail: TUrlString;
  short_description: string;
  game_url: TUrlString;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: TDateString;
  freetogame_profile_url: TUrlString;
}

export interface IGameDetailAPI extends IGamesItemAPI {
  status: string; // TODO заменить на alias
  description: string;
  minimum_system_requirements: MinimumSystemRequirements;
  screenshots: Screenshot[];
}

export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export interface IFilters {
  category?: ECategory;
  platform?: EPlatform;
  "sort-by"?: ESortBy;
}

export enum ESortBy {
  ReleaseDate = "release-date",
  Popularity = "popularity",
  Alphabetical = "alphabetical",
  Relevance = "relevance",
}

export enum EPlatform {
  PC = "pc",
  Browser = "browser",
  All = "all",
}

export enum ECategory {
  MMORPG = "mmorpg",
  Shooter = "shooter",
  Strategy = "strategy",
  Moba = "moba",
  Racing = "racing",
  Sports = "sports",
  Social = "social",
  Sandbox = "sandbox",
  OpenWorld = "open-world",
  Survival = "survival",
  PvP = "pvp",
  PvE = "pve",
  Pixel = "pixel",
  Voxel = "voxel",
  Zombie = "zombie",
  TurnBased = "turn-based",
  FirstPerson = "first-person",
  ThirdPerson = "third-Person",
  TopDown = "top-down",
  Tank = "tank",
  Space = "space",
  Sailing = "sailing",
  SideScroller = "side-scroller",
  Superhero = "superhero",
  Permadeath = "permadeath",
  Card = "card",
  BattleRoyale = "battle-royale",
  MMO = "mmo",
  MMOFPS = "mmofps",
  MMOTPS = "mmotps",
  TreeD = "3d",
  TwoD = "2d",
  Anime = "anime",
  Fantasy = "fantasy",
  SciFi = "sci-fi",
  Fighting = "fighting",
  ActionRpg = "action-rpg",
  Action = "action",
  Military = "military",
  MartialArts = "martial-arts",
  Flight = "flight",
  LowSpec = "low-spec",
  TowerDefense = "tower-defense",
  Horror = "horror",
  MMORTS = "mmorts",
}
