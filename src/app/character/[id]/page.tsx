import { notFound } from "next/navigation";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCharacterQuery } from "@/modules/character/character";
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
    const query = getCharacterQuery(id);
    await queryClient.prefetchQuery(query);

    const data = queryClient.getQueryData(query.queryKey);

    if (!data) {
      notFound();
    }
  } catch (error) {
    console.error("Failed to fetch character:", error);
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Details id={parseInt(id)} />
    </HydrationBoundary>
  );
}
