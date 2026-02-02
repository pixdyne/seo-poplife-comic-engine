import { GoogleGenAI, Type } from "@google/genai";
import { ComicResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateComicCaption = async (imageBase64: string | null, contextText: string): Promise<ComicResponse> => {
  const modelId = "gemini-2.5-flash";
  
  const prompt = `
    You are a dramatic, retro Pop Art comic book writer (Roy Lichtenstein style).
    Analyze the input (image or text) and generate a single panel description.
    1. 'caption': A melodramatic internal monologue or dialogue snippet related to the scene. Keep it short, emotional, and punchy.
    2. 'soundEffect': A classic comic book onomatopoeia (e.g., POW!, SIGH..., ZOOM!) that fits the mood.
    3. 'colorTheme': Suggest a background color hex code that fits the mood (e.g., #FF00FF for romance, #FFFF00 for energy).
  `;

  const parts: any[] = [{ text: prompt }];
  
  if (contextText) {
    parts.push({ text: `Context/Situation: ${contextText}` });
  }

  if (imageBase64) {
    // Remove data URL prefix if present for the API call
    const cleanBase64 = imageBase64.split(',')[1];
    parts.push({
      inlineData: {
        mimeType: 'image/jpeg', // Assuming jpeg for simplicity from input
        data: cleanBase64
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            caption: { type: Type.STRING },
            soundEffect: { type: Type.STRING },
            colorTheme: { type: Type.STRING }
          }
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return {
      caption: result.caption || "I couldn't think of anything to say...",
      soundEffect: result.soundEffect || "...",
      colorTheme: result.colorTheme || "#FFFFFF"
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      caption: "Something went wrong in the printing press!",
      soundEffect: "GLITCH!",
      colorTheme: "#CCCCCC"
    };
  }
};