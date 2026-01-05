
import { GoogleGenAI, Type } from "@google/genai";

// Generate catchy subject lines using Gemini 3 Flash
export const generateSubjectLines = async (productTitle: string) => {
  try {
    // Correctly initialize with named apiKey parameter from process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 5 catchy email subject line ideas for this email template: "${productTitle}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subjectLines: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["subjectLines"]
        }
      }
    });
    // Access text as a property and handle potential undefined
    const text = response.text?.trim() || '{"subjectLines": []}';
    const data = JSON.parse(text);
    return data.subjectLines;
  } catch (error) {
    console.error("Gemini Error:", error);
    return ["Limited Time Offer!", "Check this out", "New Template Arrival"];
  }
};

// Generate realistic email copy for a specific product
export const generateTemplateCopy = async (productTitle: string) => {
  try {
    // Correctly initialize with named apiKey parameter from process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a realistic headline and a short body paragraph for an email using the template: "${productTitle}". Make it professional and persuasive.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            body: { type: Type.STRING }
          },
          required: ["headline", "body"]
        }
      }
    });
    // Access text as a property and handle potential undefined
    const text = response.text?.trim() || '{"headline": "Headline Here", "body": "Email body content goes here..."}';
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return { headline: "Stunning Design Awaits", body: "This template is designed to convert and engage your audience with style." };
  }
};
