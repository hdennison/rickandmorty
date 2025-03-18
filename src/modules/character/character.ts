import { getCharacter, getCharacters } from "rickmortyapi";
import { CharacterGender, CharacterStatus } from "./types";

export const statusValues = ["All", "Dead", "Alive", "unknown"];
export const genderValues = ["All", "Female", "Male", "Genderless", "unknown"];

export const getAllCharactersQuery = ({
  gender,
  status,
}: {
  gender?: CharacterGender;
  status?: CharacterStatus;
}) => {
  const queryOptions: Record<string, string> = {};

  if (status && status !== "All" && statusValues.includes(status))
    queryOptions["status"] = status;

  if (gender && gender !== "All" && genderValues.includes(gender))
    queryOptions["gender"] = gender;

  return {
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [
      "characters",
      queryOptions.status ?? "All",
      ,
      queryOptions.gender ?? "All",
    ],
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
