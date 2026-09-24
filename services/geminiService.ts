
import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI | null => {
  const key = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!key) return null;
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({ apiKey: key });
  }
  return aiInstance;
};

export const getAIAgentResponse = async (userInput: string): Promise<string> => {
  try {
    const ai = getAIClient();
    if (!ai) {
      return "Let's Flow is here to help! Connect with us to automate your WhatsApp workflows and scale with zero manual labor.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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
