import { useMemo, useState } from "react";
import Link from "next/link";
import { Character } from "@/modules/character/types";
import { listOrderOptions } from "@/modules/list/list";
import type { ListOrder } from "@/modules/list/types";
import { Panel } from "@/components/ui/panel/panel";
import { CircleIcon } from "@/components/ui/icon/icon";
import Image from "next/image";
import { Select } from "@/components/ui/select/select";
import { Button } from "@/components/ui/button/button";

const statusColors = {
  Alive: "green",
  Dead: "red",
  unknown: "grey",
};

const CharacterCard = ({ character }: { character: Character }) => {
  const { id, image, name, status, species } = character;

  return (
    <Panel padding="none" className="flex gap-2 overflow-hidden">
      <Image src={image} alt={name} width={150} height={150} />
      <div className="flex flex-col items-start p-4">
        <h3 className="font-bold">{name}</h3>
        <div className="flex gap-2 items-baseline">
          <CircleIcon
            size={8}
            color={statusColors[status]}
            fill={statusColors[status]}
          />
          {species}
        </div>
        <Button variant="secondary" className="mt-auto" asChild>
          <Link href={`/character/${id}`}>Details</Link>
        </Button>
      </div>
    </Panel>
  );
};

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
    <div className="grid gap-6">
      <Panel className="flex justify-between items-center">
        <h2 className="font-bold">Found {amount} characters</h2>
        <div className="flex gap-3 items-center">
          <label htmlFor="order" className="sr-only md:not-sr-only">
            Order
          </label>
          <Select
            id="order"
            name="order"
            onChange={(e) =>
              setOrder(e.target.value as "none" | "asc" | "desc")
            }
          >
            {Object.entries(listOrderOptions).map(([key, label]) => (
              <Select.Option key={key} value={key}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </div>
      </Panel>
      <ul className="deck">
        {sortedCharacters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
