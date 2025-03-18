import { getCharacters } from "rickmortyapi";
export type { Character } from "rickmortyapi";

export const getAllCharactersQuery = {
  queryKey: ["getAllCharacters"],
  queryFn: () => getCharacters(),
};
