import { notFound } from "next/navigation";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  getCharacterQuery,
  getEpisodesQuery,
} from "@/modules/character/character";
import { Details } from "./components/details";
import { Metadata } from "next";
import { getCharacter } from "rickmortyapi";
import { SITE_NAME } from "@/constants";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const character = await getCharacter(parseInt(id));

  return {
    title: `${character.data.name} - ${SITE_NAME}`,
  };
}

export default async function CharacterPage({
  params: rawParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const queryClient = new QueryClient();
  const { id } = await rawParams;

  if (!id || isNaN(Number(id))) {
    notFound();
  }

  try {
    const characterQuery = getCharacterQuery(id);
    await queryClient.prefetchQuery(characterQuery);
    const characterData = queryClient.getQueryData<{
      data: { episode: string[] };
    }>(characterQuery.queryKey);

    if (!characterData) {
      notFound();
    }

    const episodeIds = characterData.data.episode
      .map((url: string) => parseInt(url.split("/").pop()!, 10))
      .filter(Boolean);

    if (episodeIds.length > 0) {
      const episodesQuery = getEpisodesQuery(episodeIds);
      await queryClient.prefetchQuery(episodesQuery);
    }
  } catch (error) {
    console.error("Failed to fetch character or episodes:", error);
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Details id={parseInt(id)} />
    </HydrationBoundary>
  );
}
