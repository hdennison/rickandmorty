"use client";

import { useQuery } from "@tanstack/react-query";
import { getCharacterQuery } from "@/modules/character/character";
import type { Character } from "@/modules/character/character";
import Image from "next/image";

export const Details = ({ id }: { id: Character["id"] }) => {
  const { status, data } = useQuery(getCharacterQuery(id));

  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error!</div>;
  }
  const character = data.data;

  return (
    <div>
      <h1>{character.name}</h1>
      <Image
        src={character.image}
        alt={character.name}
        width={150}
        height={150}
        priority
      />
    </div>
  );
};
