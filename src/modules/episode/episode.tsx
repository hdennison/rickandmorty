import { Episode, EpisodesBySeason } from "./types";

export const groupEpisodesBySeason = (
  episodes: Episode[],
): EpisodesBySeason => {
  return episodes.reduce<EpisodesBySeason>((acc, episode) => {
    const season = episode.episode.substring(0, 3);
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {});
};
