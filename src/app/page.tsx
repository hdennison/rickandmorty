import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Home from "@/components/home/home";
import { getAllCharactersQuery } from "@/modules/character/character";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const { gender, status } = await searchParams;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getAllCharactersQuery({ gender, status }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home gender={gender} status={status} />
    </HydrationBoundary>
  );
}
