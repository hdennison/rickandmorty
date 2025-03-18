import { getCharacter, getCharacters } from "rickmortyapi";
import { CharacterStatus } from "./types";

export const statusValues = ["All", "Dead", "Alive", "unknown"];
export const genderValues = ["All", "Female", "Male", "Genderless", "unknown"];

export const getAllCharactersQuery = ({
  status,
}: {
  status?: CharacterStatus;
}) => {
  const queryOptions: Record<string, string> = {};

  if (status && status !== "All" && statusValues.includes(status))
    queryOptions["status"] = status;

  return {
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["characters", queryOptions.status ?? "All"],
    queryFn: () => getCharacters(queryOptions),
  };
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
