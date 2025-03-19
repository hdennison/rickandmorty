import { Panel } from "@/components/ui/panel/panel";
import { Character } from "@/modules/character/types";
import Image from "next/image";

export const CharacterInfo = ({ character }: { character: Character }) => {
  return (
    <Panel>
      <article className="flex flex-col md:flex-row gap-6">
        <Image
          className="rounded-md self-center aspect-square md:w-[244px]"
          src={character.image}
          alt={character.name}
          width={175}
          height={175}
          priority
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center md:text-start mb-2">
            {character.name}
          </h1>

          <Panel padding="large" level="low">
            <ul className="grid gap-1">
              <li className="flex gap-2 ">
                <span className="font-bold">Species:</span>
                {character.species}
              </li>
              <li className="flex gap-2 ">
                <span className="font-bold">Gender:</span>
                {character.gender}
              </li>
              <li className="flex gap-2 ">
                <span className="font-bold">Status:</span>
                {character.status}
              </li>
              <li className="flex gap-2 ">
                <span className="font-bold">Origin:</span>
                {character.origin.name}
              </li>
              <li className="flex gap-2 ">
                <span className="font-bold">Last seen on :</span>
                {character.location.name}
              </li>
            </ul>
          </Panel>
        </div>
      </article>
    </Panel>
  );
};
