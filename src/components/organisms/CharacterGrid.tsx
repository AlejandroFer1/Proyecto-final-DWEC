import type { JikanCharacterData } from "../../types/character";
import { CharacterCard } from "../molecules/CharacterCard";

interface CharacterGridProps {
  characters: JikanCharacterData[];
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  if (!characters || characters.length === 0) {
    return (
      <div className="text-center text-white/50 py-12">
        <p>No se encontraron personajes en el índice original.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {characters.map((data, index) => (
        <CharacterCard key={`${data.character.mal_id}-${index}`} data={data} />
      ))}
    </div>
  );
}
