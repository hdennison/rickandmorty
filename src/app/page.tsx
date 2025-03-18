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
  const { status } = await searchParams;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getAllCharactersQuery({ status }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home status={status} />
    </HydrationBoundary>
  );
}
