import Link from "next/link";
import { Character } from "@/modules/character/types";

export const List = ({
  characters,
  amount,
}: {
  characters: Character[];
  amount: number;
}) => (
  <div className="grid gap-2">
    <h1 className="font-bold">Found {amount} characters</h1>
    <ul className="grid gap-4">
      {characters.map(({ id, name, status }) => (
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
