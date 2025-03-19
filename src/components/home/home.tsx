"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllCharactersQuery } from "@/modules/character/character";
import type {
  CharacterGender,
  CharacterStatus,
} from "@/modules/character/types";
import { ListError } from "./components/list/list-error";
import { List } from "./components/list/list";
import { ListLoading } from "./components/list/list-loading";
import { Logo } from "../ui/logo/logo";
import { Panel } from "../ui/panel/panel";
import { Container } from "../ui/container/container";
import { Filters } from "./components/filters";

export default function Home({
  gender,
  status,
}: {
  gender: CharacterGender;
  status: CharacterStatus;
}) {
  const { status: queryStatus, data } = useQuery(
    getAllCharactersQuery({ gender, status }),
  );

  return (
    <Container className="grid gap-6 my-8">
      <header className="flex flex-col md:flex-row gap-6 md:pl-3">
        <Logo priority className="w-[200px] self-center md:w-[150px]" />
        <Panel asChild className="flex-1">
          <Filters gender={gender} status={status} />
        </Panel>
      </header>
      <main className="grid gap-4">
        {queryStatus === "pending" && <ListLoading />}
        {queryStatus === "error" && <ListError />}
        {queryStatus === "success" && (
          <List
            characters={data?.data.results ?? []}
            amount={data.data.info?.count ?? 0}
          />
        )}
      </main>
    </Container>
  );
}
