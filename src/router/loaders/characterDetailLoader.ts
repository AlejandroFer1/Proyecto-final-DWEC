import type { LoaderFunctionArgs } from "react-router-dom";
import { jjkApi } from "../../services/jjkApi";

export async function characterDetailLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (!id) throw new Error("Character ID is required");

  try {
    const response = await jjkApi.getCharacterById(Number(id));
    return { character: response.data };
  } catch (error) {
    console.error("Error fetching character details:", error);
    throw new Response("Character not found", { status: 404 });
  }
}
