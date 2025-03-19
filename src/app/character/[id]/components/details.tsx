"use client";

import { useQuery } from "@tanstack/react-query";
import { Character } from "@/modules/character/types";
import {
  getCharacterQuery,
  getEpisodesQuery,
} from "@/modules/character/character";
import { CharacterInfo } from "./character-info";
import { EpisodeList } from "./episode-list";
import { Container } from "@/components/ui/container/container";
import { Logo } from "@/components/ui/logo/logo";
import Link from "next/link";

export const Details = ({ id }: { id: Character["id"] }) => {
  const { data: characterData, status: characterStatus } = useQuery(
    getCharacterQuery(id),
  );

  const episodeIds = characterData?.data?.episode
    ? characterData.data.episode.map((url) =>
        parseInt(url.split("/").pop()!, 10),
      )
    : [];

  const { data: episodeData, status: episodesStatus } = useQuery({
    ...getEpisodesQuery(episodeIds),
    enabled: episodeIds.length > 0,
  });

  if (characterStatus === "pending" || episodesStatus === "pending") {
    return <div>Loading...</div>;
  }
  if (characterStatus === "error" || episodesStatus === "error") {
    return <div>Error!</div>;
  }

  const episodes = Array.isArray(episodeData) ? episodeData : [episodeData];

  return (
    <Container className="flex flex-col gap-8 my-8">
      <Link href="/" className="self-center">
        <Logo className="w-[200px]" />
      </Link>
      <CharacterInfo character={characterData.data} />
      <EpisodeList
        characterName={characterData.data.name}
        episodes={episodes}
      />
    </Container>
  );
};
