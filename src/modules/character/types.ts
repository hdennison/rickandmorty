import { statusValues } from "./character";

export type { Character } from "rickmortyapi";
export type CharacterStatus = (typeof statusValues)[number];
