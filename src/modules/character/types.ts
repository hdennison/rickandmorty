import { statusValues, genderValues } from "./character";

export type { Character } from "rickmortyapi";
export type CharacterStatus = (typeof statusValues)[number];
export type CharacterGender = (typeof genderValues)[number];
