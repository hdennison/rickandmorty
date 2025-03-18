import { Character } from "rickmortyapi";

export const List = ({
  characters,
  amount,
}: {
  characters: Character[];
  amount: number;
}) => (
  <div className="grid gap-2">
    <h1 className="font-bold">Found {amount} characters</h1>
    <ul>
      {characters.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </div>
);
