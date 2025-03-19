import { Panel } from "@/components/ui/panel/panel";
import { groupEpisodesBySeason } from "@/modules/episode/episode";
import { Episode } from "rickmortyapi";

export const EpisodeList = ({
  characterName,
  episodes,
  ...props
}: {
  characterName: string;
  episodes: Episode[];
}) => {
  const groupedEpisodes = groupEpisodesBySeason(episodes);

  return (
    <Panel className="grid gap-4" {...props}>
      <h2 className="font-bold text-2xl">Episodes with {characterName}</h2>

      <div className="grid gap-8">
        {Object.entries(groupedEpisodes).map(([season, seasonEpisodes]) => (
          <Panel padding="large" level="low" key={season}>
            <h3 className="font-bold text-xl mb-2">{season}</h3>
            <ul className="grid gap-2">
              {seasonEpisodes.map((episode) => (
                <li className="flex gap-2" key={episode.id}>
                  <span className="font-bold">{episode.episode}</span>
                  {episode.name}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </Panel>
  );
};
