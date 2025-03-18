import { getCharacter, getCharacters } from "rickmortyapi";
export type { Character } from "rickmortyapi";

export const getAllCharactersQuery = {
  queryKey: ["getAllCharacters"],
  queryFn: () => getCharacters(),
};

export const getCharacterQuery = (id: number | string) => {
  const parsedId = typeof id === "string" ? parseInt(id, 10) : id;

  if (isNaN(parsedId) || parsedId <= 0) {
    throw new Error(`Invalid character ID: "${id}"`);
  }

  return {
    queryKey: ["getCharacter", parsedId],
    queryFn: async () => {
      return await getCharacter(parsedId);
    },
  };
};
