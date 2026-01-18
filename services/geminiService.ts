
import { GoogleGenAI } from "@google/genai";

export async function* getCourseRecommendationStream(userGoal: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: userGoal }] }],
      config: {
        systemInstruction: `Eres el asesor experto de Jordan Gauss Academy. 
        Tu objetivo es orientar a padres de familia en Bolivia.
        Director: Juan Pablo Gonzales Cruz (Psicólogo y Prof. de Matemáticas).
        Sede: Cochabamba.
        Tono: Empático, profesional, científico pero accesible.
        Regla de Oro: Si mencionan dificultades de aprendizaje, enfócate en la neurodiversidad como talento.
        Máximo 60 palabras por respuesta.`,
        temperature: 0.7,
        topP: 0.9,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    for await (const chunk of responseStream) {
      const text = chunk.text;
      if (text) yield text;
    }
  } catch (error) {
    console.error("Error in Gemini stream:", error);
    yield "Hubo un pequeño inconveniente técnico. Por favor, escríbenos directamente por WhatsApp para una asesoría personalizada inmediata.";
  }
}
