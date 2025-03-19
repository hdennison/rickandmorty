import { useMemo, useState } from "react";
import Link from "next/link";
import { Character } from "@/modules/character/types";
import { listOrderOptions } from "@/modules/list/list";
import type { ListOrder } from "@/modules/list/types";

export const List = ({
  characters,
  amount,
}: {
  characters: Character[];
  amount: number;
}) => {
  const [order, setOrder] = useState<ListOrder>("none");

  const sortedCharacters = useMemo(() => {
    if (order === "asc")
      return [...characters].sort((a, b) => a.name.localeCompare(b.name));
    if (order === "desc")
      return [...characters].sort((a, b) => b.name.localeCompare(a.name));
    return characters;
  }, [characters, order]);

  return (
    <div className="grid gap-2">
      <h1 className="font-bold">Found {amount} characters</h1>
      <div className="flex gap-2 items-center">
        <label htmlFor="order">Order</label>
        <select
          id="order"
          name="order"
          className="border-2  p-2"
          onChange={(e) => setOrder(e.target.value as "none" | "asc" | "desc")}
        >
          {Object.entries(listOrderOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid gap-4">
        {sortedCharacters.map(({ id, name, status }) => (
          <li key={id}>
            <Link className="font-bold" href={`/character/${id}`}>
              {name}
            </Link>
            <p>Status: {status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
