import { Link } from "react-router-dom";
import type { JikanCharacterData } from "../../types/character";

interface CharacterCardProps {
  data: JikanCharacterData;
}

export function CharacterCard({ data }: CharacterCardProps) {
  const { character, role } = data;
  const imageUrl =
    character.images.webp.image_url || character.images.jpg.image_url;

  return (
    <Link
      to={`/character/${character.mal_id}`}
      className="group relative overflow-hidden rounded-xl bg-jjk-darker border border-white/10 hover:border-jjk-bright-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-jjk-bright-purple/20 flex flex-col h-full"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={imageUrl}
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jjk-darker via-jjk-darker/50 to-transparent opacity-80" />

        {/* Role Badge */}
        <div className="absolute top-2 right-2">
          <span
            className={`text-xs font-bold px-2 py-1 rounded shadow-md border ${role === "Main" ? "bg-jjk-purple text-white border-jjk-bright-purple" : "bg-gray-800 text-gray-300 border-gray-600"}`}
          >
            {role}
          </span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-end transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-1 truncate group-hover:text-jjk-bright-purple transition-colors">
          {character.name}
        </h3>
        <p className="text-sm font-medium text-jjk-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          Detalles &rarr;
        </p>
      </div>
    </Link>
  );
}
