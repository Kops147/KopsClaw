// src/opportunity-engine/scanner.ts
import profiler from '../profiler';
import { chooseBestModel } from '../model-router';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  roiScore: number;
  action: string;
  source: string;
  urgency: 'high' | 'medium' | 'low';
}

export async function scanOpportunities(): Promise<Opportunity[]> {
  const profile = profiler.getProfile();
  const opportunities: Opportunity[] = [];

  const task = `Find high-ROI opportunities for someone skilled in ${profile.skills.join(', ')} whose goal is ${profile.goals.join(', ')}`;

  // Use smart model to think (placeholder for real scanning)
  const model = await chooseBestModel(task);
  console.log(`[Scanner] Using model: ${model.provider}/${model.model}`);

  // Simulated intelligent results based on your profile
  if (profile.skills.some(s => /ai|typescript|code/i.test(s))) {
    opportunities.push({
      id: 'opp-1',
      title: "💼 High-Paying LLM Agent Project",
      description: "Client needs autonomous AI system. Budget R55k–R85k. Perfect match for your stack.",
      roiScore: 94,
      action: "Draft proposal in 2 clicks",
      source: "Upwork + LinkedIn",
      urgency: "high"
    });
  }

  opportunities.push({
    id: 'opp-2',
    title: "📈 Build Your Personal Brand Package",
    description: "Package your KopsClaw experience into a consulting offer. Potential R20k+/month recurring.",
    roiScore: 82,
    action: "Create service landing page",
    source: "Market Analysis",
    urgency: "medium"
  });

  return opportunities;
}
