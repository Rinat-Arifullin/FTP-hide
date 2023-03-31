import { IOption } from "components/common/Select/models";

export const categoriesOptions: IOption[] = [
  { value: "mmorpg", label: "MMORPG" },
  { value: "shooter", label: "Shooter" },
  { value: "strategy", label: "Strategy" },
  { value: "moba", label: "Moba" },
  { value: "racing", label: "Racing" },
  { value: "sports", label: "Sports" },
  { value: "social", label: "Social" },
  { value: "sandbox", label: "Sandbox" },
  { value: "open-world", label: "Open world" },
  { value: "survival", label: "Survival" },
  { value: "pvp", label: "PvP" },
  { value: "pve", label: "PvE" },
  { value: "pixel", label: "Pixel" },
  { value: "voxel", label: "Voxel" },
  { value: "zombie", label: "Zombie" },
  { value: "first-person", label: "First person" },
];
export const platformsOptions: IOption[] = [
  { value: "pc", label: "PC" },
  { value: "browser", label: "Browser" },
];
export const sortedOptions: IOption[] = [
  { value: "release-date", label: "Release date" },
  { value: "popularity", label: "Popularity" },
  { value: "alphabetical", label: "Alphabetical" },
];
