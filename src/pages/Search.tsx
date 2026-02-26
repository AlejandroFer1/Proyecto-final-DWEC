import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { jjkApi } from "../services/jjkApi";
import type { JikanCharacterData } from "../types/character";
import { CharacterGrid } from "../components/organisms/CharacterGrid";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<JikanCharacterData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await jjkApi.searchCharacters(query);
      setResults(response.data || []);
    } catch (err) {
      console.error("Search error:", err);
      setError(
        "Fallo al obtener personajes. La energía maldita es demasiado fuerte.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      <section className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          <span className="text-jjk-bright-purple text-glow">Busca</span> en los
          Archivos
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Busca hechiceros, maldiciones o personas corrientes específicas.
        </p>
      </section>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-white/50 group-focus-within:text-jjk-bright-purple transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) =>
              setSearchParams(e.target.value ? { q: e.target.value } : {})
            }
            className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-32 text-white placeholder-white/30 focus:outline-none focus:border-jjk-bright-purple/50 focus:ring-1 focus:ring-jjk-bright-purple/50 transition-all shadow-lg"
            placeholder="Introduce el nombre del personaje..."
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute inset-y-2 right-2 px-6 bg-jjk-purple hover:bg-jjk-purple-light disabled:bg-white/5 disabled:text-white/30 rounded-xl font-bold transition-all"
          >
            {isLoading ? "Buscando..." : "Buscar"}
          </button>
        </form>
      </div>

      <div className="pt-8">
        {isLoading && (
          <div className="text-center text-white/50 py-12 flex justify-center items-center gap-3">
            <div className="w-6 h-6 border-2 border-jjk-bright-purple border-t-transparent rounded-full animate-spin"></div>
            Canalizando energía maldita...
          </div>
        )}

        {error && (
          <div className="text-center text-jjk-crimson py-12 bg-jjk-crimson/10 rounded-2xl border border-jjk-crimson/30">
            {error}
          </div>
        )}

        {!isLoading && !error && hasSearched && results.length === 0 && (
          <div className="text-center text-white/50 py-12">
            No se encontraron personajes que coincidan con "{query}".
          </div>
        )}

        {!isLoading && !error && results.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-jjk-bright-purple/30 pb-2">
              Resultados para "{query}"
            </h2>
            <CharacterGrid characters={results} />
          </div>
        )}
      </div>
    </div>
  );
}
