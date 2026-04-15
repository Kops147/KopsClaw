// src/canvas/proactive.ts
import { scanOpportunities } from '../opportunity-engine/scanner';

export async function pushProactiveCards() {
  const opportunities = await scanOpportunities();

  console.log(`\n🚀 KopsClaw found ${opportunities.length} new opportunities for you:\n`);

  opportunities.forEach((opp, i) => {
    console.log(`${i+1}. ${opp.title} (ROI: ${opp.roiScore}%)`);
    console.log(`   ${opp.description}`);
    console.log(`   → ${opp.action}\n`);
  });
}
