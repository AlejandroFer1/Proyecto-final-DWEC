import { jjkApi } from "../../services/jjkApi";

export async function homeLoader() {
  try {
    const response = await jjkApi.getCharacters();
    return { characters: response.data };
  } catch (error) {
    console.error("Error fetching home characters:", error);
    return { characters: [] };
  }
}
