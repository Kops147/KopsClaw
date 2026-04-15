// src/canvas/actions.ts
// One-Click Ready Action Triggers
import { realOpportunityScan } from '../opportunity-engine/real-scanner';
import { broadcastOpportunities } from '../voice/notifications';

export async function triggerProactiveActions() {
  const opps = await realOpportunityScan();
  
  if (opps.length === 0) return;

  console.log(`\n${'='.repeat(70)}`);
  console.log(`🔥 KOPSCLAW OPPORTUNITY DASHBOARD`);
  console.log(`${'='.repeat(70)}\n`);

  opps.forEach((opp, i) => {
    console.log(`${i+1}. ${opp.title}`);
    console.log(`   📝 ${opp.description}`);
    console.log(`   💰 ROI: ${opp.roiScore}% | Urgency: ${opp.urgency.toUpperCase()}`);
    console.log(`   → ${opp.action}`);
    if (opp.url) console.log(`   🔗 ${opp.url}`);
    console.log('');
  });

  console.log(`${'='.repeat(70)}\n`);

  // Auto voice for high ROI opportunities
  await broadcastOpportunities(opps);
}
