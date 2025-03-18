import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Home from "@/components/home/home";
import { getAllCharactersQuery } from "@/modules/character/character";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getAllCharactersQuery);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
