
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendedBurger } from "../types";

export const getAIBurgerRecommendation = async (mood: string): Promise<RecommendedBurger | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `O usuário está se sentindo: "${mood}". Crie um hambúrguer gourmet único que combine com esse humor.`,
      config: {
        systemInstruction: "Você é um mestre hamburgueiro da Hamburgueria SP. Responda apenas em formato JSON com o nome do hambúrguer, ingredientes e uma breve explicação do porquê combina com o humor do usuário.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            reasoning: { type: Type.STRING }
          },
          required: ["name", "ingredients", "reasoning"]
        }
      }
    });

    const jsonStr = response.text;
    if (jsonStr) {
      return JSON.parse(jsonStr) as RecommendedBurger;
    }
    return null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
