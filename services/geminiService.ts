
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAgentResponse = async (userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are the Let's Flow AI Agent. Keep your answers brief, professional, and helpful. 
        Focus on automation, WhatsApp bots, and AI growth. Your tone is "modern minimalist". 
        Limit your response to 2 sentences max. Respond as if you are inside a WhatsApp chat.`,
        temperature: 0.7,
      }
    });

    return response.text || "I'm processing that. How can Let's Flow help you grow today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Let's Flow is here to help! Could you please repeat that?";
  }
};
