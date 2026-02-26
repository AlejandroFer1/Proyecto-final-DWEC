import { useLoaderData, useNavigate } from "react-router-dom";
import type { JikanCharacterDetailResponse } from "../types/character";

export default function CharacterDetail() {
  const { character } = useLoaderData() as {
    character: JikanCharacterDetailResponse["data"];
  };
  const navigate = useNavigate();

  const imageUrl =
    character.images.webp.image_url || character.images.jpg.image_url;

  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/50 hover:text-jjk-bright-purple transition-colors bg-black/20 px-4 py-2 rounded-lg border border-white/5 hover:border-jjk-bright-purple/30"
      >
        <span>&larr;</span> Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 bg-black/40 p-8 rounded-3xl border border-white/5 shadow-2xl">
        <div className="col-span-1 border-4 border-jjk-darker rounded-xl overflow-hidden shadow-xl shadow-jjk-purple/20 bg-black">
          <img
            src={imageUrl}
            alt={character.name}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="col-span-1 md:col-span-2 space-y-6">
          <div>
            <div className="flex items-end justify-between border-b border-jjk-bright-purple/30 pb-4 mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white">
                  {character.name}
                </h1>
                <p className="text-xl text-jjk-gold mt-1">
                  {character.name_kanji}
                </p>
              </div>
              <div className="text-center bg-jjk-purple/20 px-4 py-2 rounded-lg border border-jjk-bright-purple/40">
                <span className="block text-xl font-bold text-jjk-bright-purple leading-none">
                  {character.favorites}
                </span>
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  Favoritos
                </span>
              </div>
            </div>

            {character.nicknames && character.nicknames.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {character.nicknames.map((nickname, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-sm text-white/70"
                  >
                    {nickname}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-jjk-purple-light mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-jjk-purple-light rounded-full inline-block"></span>
              Acerca de
            </h3>
            <div className="text-white/80 leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-jjk-purple scrollbar-track-black/20">
              {character.about ||
                "No hay información detallada disponible en los archivos."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
