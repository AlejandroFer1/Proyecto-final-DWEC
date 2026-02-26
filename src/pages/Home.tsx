import { useLoaderData } from "react-router-dom";
import type { JikanCharacterData } from "../types/character";
import { CharacterGrid } from "../components/organisms/CharacterGrid";

export default function Home() {
  const { characters } = useLoaderData() as {
    characters: JikanCharacterData[];
  };

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      <section className="text-center py-16 px-4 bg-gradient-to-b from-jjk-darker to-transparent rounded-3xl border border-white/5 shadow-2xl shadow-jjk-purple/10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Descubre{" "}
          <span className="text-jjk-bright-purple text-glow">Hechiceros</span>{" "}
          <br className="hidden md:block" /> y{" "}
          <span className="text-jjk-crimson text-glow">Maldiciones</span>
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Explora los personajes del mundo de Jujutsu Kaisen. Descubre detalles
          sobre sus poderes, roles y más en este índice maldito.
        </p>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6 border-b border-jjk-bright-purple/30 pb-2">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-2 h-8 bg-jjk-bright-purple rounded-full inline-block"></span>
            Personajes Populares
          </h2>
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
            {characters?.length || 0} Registros
          </span>
        </div>

        <CharacterGrid characters={characters} />
      </section>
    </div>
  );
}
