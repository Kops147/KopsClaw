// src/canvas/cards.ts
// Proactive Canvas Cards: Display opportunities as interactive action cards
// Integrates with A2UI (OpenClaw Control UI) and terminal

import { opportunityEngine, type Opportunity } from '../opportunity-engine';

export async function pushOpportunityCards() {
  const opps = await opportunityEngine.scan();

  if (opps.length === 0) {
    console.log('\n✓ No new immediate opportunities right now.');
    return;
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`🎯 KOPSCLAW OPPORTUNITY SCAN — ${opps.length} Live Opportunities`);
  console.log(`${'='.repeat(70)}\n`);

  for (const opp of opps) {
    console.log(`📌 ${opp.title}`);
    console.log(`   ${opp.description}`);
    console.log(`   ROI Score: ${opp.roiScore}/100 | Effort: ${opp.effort}`);
    console.log(`   Source: ${opp.source}`);
    if (opp.deadline) console.log(`   ⏰ Deadline: ${opp.deadline}`);
    console.log(`   Tags: ${opp.tags.join(', ')}`);
    console.log(`   → Action: ${opp.action}`);
    console.log(`\n`);
  }

  console.log(`${'='.repeat(70)}`);
  console.log(`Next scan in 15 minutes. Use \`kopsclaw opportunities\` anytime.`);
  console.log(`${'='.repeat(70)}\n`);
}

export async function formatCardForA2UI(opp: Opportunity): Promise<Record<string, unknown>> {
  return {
    id: opp.id,
    type: 'opportunity',
    title: opp.title,
    description: opp.description,
    roiScore: opp.roiScore,
    effort: opp.effort,
    source: opp.source,
    action: opp.action,
    url: opp.url,
    tags: opp.tags,
    ctaButton: {
      text: opp.action,
      action: `kopsclaw opportunities action ${opp.id}`,
    },
  };
}

export default {
  pushOpportunityCards,
  formatCardForA2UI,
};
