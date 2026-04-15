// src/model-router/index.ts
// Smart "No Excuses" Model Router: Ollama > HuggingFace > Gemini
// Always ensures a model is available for inference

export type ModelProvider = 'ollama' | 'huggingface' | 'gemini' | 'auto';

export interface ModelChoice {
  provider: string;
  model: string;
  confidence: 'local' | 'free' | 'fallback';
}

export async function chooseBestModel(taskDescription: string): Promise<ModelChoice> {
  console.log(`[ModelRouter] Deciding best model for: "${taskDescription.slice(0, 70)}..."`);

  // Priority 1: Local Ollama (fastest & private)
  try {
    const ollamaRes = await fetch('http://localhost:11434/api/tags');
    if (ollamaRes.ok) {
      const data = await ollamaRes.json() as { models?: Array<{ name: string }> };
      if (data.models && data.models.length > 0) {
        const bestLocal = data.models[0].name;
        console.log(`[ModelRouter] → Using local: ${bestLocal}`);
        return { provider: 'ollama', model: bestLocal, confidence: 'local' };
      }
    }
  } catch (e) {
    console.log(`[ModelRouter] Local unavailable: ${(e as Error).message}`);
  }

  // Priority 2: Free Hugging Face / Gemini
  try {
    if (process.env.HUGGINGFACE_API_KEY) {
      console.log(`[ModelRouter] → Using HuggingFace free tier`);
      return { provider: 'huggingface', model: 'mistralai/Mistral-7B', confidence: 'free' };
    }
  } catch (e) {}

  // Priority 3: Ultimate fallback to Gemini Flash (free)
  console.log(`[ModelRouter] → Falling back to Gemini Flash (free)`);
  return { provider: 'gemini', model: 'gemini-1.5-flash', confidence: 'fallback' };
}

export default chooseBestModel;
