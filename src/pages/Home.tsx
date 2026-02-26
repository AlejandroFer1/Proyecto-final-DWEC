import { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import type { JikanCharacterData } from "../types/character";
import { CharacterGrid } from "../components/organisms/CharacterGrid";

export default function Home() {
  const { characters } = useLoaderData() as {
    characters: JikanCharacterData[];
  };

  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  // Get unique roles for the filter buttons
  const availableRoles = useMemo(() => {
    const roles = new Set(characters.map((c) => c.role));
    return ["Todos", ...Array.from(roles)];
  }, [characters]);

  // Filter characters based on the active role
  const filteredCharacters = useMemo(() => {
    if (activeFilter === "Todos") return characters;
    return characters.filter((c) => c.role === activeFilter);
  }, [characters, activeFilter]);

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
          sobre sus poderes, búsquedas avanzadas y utiliza el filtrado por
          roles.
        </p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b border-jjk-bright-purple/30 pb-4 gap-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-2 h-8 bg-jjk-bright-purple rounded-full inline-block"></span>
            Personajes Populares
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-white/40 uppercase tracking-widest mr-2">
              Filtrar por Rol:
            </span>
            {availableRoles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveFilter(role)}
                className={`px-3 py-1 text-sm font-bold rounded shadow transition-all ${
                  activeFilter === role
                    ? "bg-jjk-purple text-white border border-jjk-bright-purple shadow-jjk-bright-purple/50 text-glow"
                    : "bg-black/40 text-white/60 border border-white/10 hover:border-jjk-purple-light hover:text-white"
                }`}
              >
                {role === "Main"
                  ? "Principal"
                  : role === "Supporting"
                    ? "Secundario"
                    : role}
              </button>
            ))}
          </div>
        </div>

        <CharacterGrid characters={filteredCharacters} />
      </section>
    </div>
  );
}
