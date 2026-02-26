import axios from "axios";
import type {
  JikanCharacterResponse,
  JikanCharacterDetailResponse,
} from "../types/character";

// We use the Jikan API v4 which provides an anime endpoint that lists characters (Anime ID 40748 is Jujutsu Kaisen).
const BASE_URL = "https://api.jikan.moe/v4";
const JJK_ANIME_ID = 40748;

const api = axios.create({
  baseURL: BASE_URL,
});

export const jjkApi = {
  getCharacters: async (): Promise<JikanCharacterResponse> => {
    // Note: This endpoint gets characters of a specific anime.
    const response = await api.get<JikanCharacterResponse>(
      `/anime/${JJK_ANIME_ID}/characters`,
    );
    return response.data;
  },

  getCharacterById: async (
    id: number | string,
  ): Promise<JikanCharacterDetailResponse> => {
    const response = await api.get<JikanCharacterDetailResponse>(
      `/characters/${id}/full`,
    );
    return response.data;
  },

  searchCharacters: async (query: string): Promise<JikanCharacterResponse> => {
    // Search endpoint allows searching all characters by name, but doesn't wrap in "character" node
    const response = await api.get<any>(
      `/characters?q=${query}&order_by=favorites&sort=desc`,
    );

    const mappedData = response.data.data.map((char: any) => ({
      character: {
        mal_id: char.mal_id,
        url: char.url,
        images: char.images,
        name: char.name,
      },
      role: "Mención",
      favorites: char.favorites || 0,
    }));

    return { data: mappedData };
  },
};
