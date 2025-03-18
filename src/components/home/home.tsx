"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllCharactersQuery } from "@/modules/character/character";
import { ListError } from "./components/list/list-error";
import { List } from "./components/list/list";
import { ListLoading } from "./components/list/list-loading";

export default function Home() {
  const { status, data } = useQuery(getAllCharactersQuery);

  return (
    <main>
      {status === "pending" && <ListLoading />}
      {status === "error" && <ListError />}
      {status === "success" && (
        <List
          characters={data?.data.results ?? []}
          amount={data.data.info?.count ?? 0}
        />
      )}
    </main>
  );
}
