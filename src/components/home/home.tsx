"use client";

import { useQuery } from "@tanstack/react-query";
import {
  genderValues,
  getAllCharactersQuery,
  statusValues,
} from "@/modules/character/character";
import type {
  CharacterGender,
  CharacterStatus,
} from "@/modules/character/types";
import { ListError } from "./components/list/list-error";
import { List } from "./components/list/list";
import { ListLoading } from "./components/list/list-loading";

const Filters = ({
  gender,
  status,
}: {
  gender: CharacterGender;
  status: CharacterStatus;
}) => (
  <form action="" method="GET" className="flex gap-4">
    <div className="flex gap-2 items-center">
      <label htmlFor="gender">Gender</label>
      <select id="gender" name="gender" className="border-2  p-2">
        {genderValues.map((v) => (
          <option key={v} value={v} selected={v === gender}>
            {v}
          </option>
        ))}
      </select>
    </div>
    <div className="flex gap-2 items-center">
      <label htmlFor="status">Status</label>
      <select id="status" name="status" className="border-2  p-2">
        {statusValues.map((v) => (
          <option key={v} value={v} selected={v === status}>
            {v}
          </option>
        ))}
      </select>
    </div>
    <button className="bg-gray-200 border-2 py-1 px-3 text-bold">Search</button>
  </form>
);

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
    <main className="m-4 grid gap-4">
      <Filters gender={gender} status={status} />
      {queryStatus === "pending" && <ListLoading />}
      {queryStatus === "error" && <ListError />}
      {queryStatus === "success" && (
        <List
          characters={data?.data.results ?? []}
          amount={data.data.info?.count ?? 0}
        />
      )}
    </main>
  );
}
