// src/cli/lifeguard.ts
// KopsClaw Lifeguard CLI Commands
// Real-time status, scanning, and autonomy controls

import profiler from '../profiler';
import opportunityEngine from '../opportunity-engine';
import { pushOpportunityCards } from '../canvas/cards';
import { scanOpportunities } from '../opportunity-engine/scanner';
import { pushProactiveCards } from '../canvas/proactive';

export interface LifeguardStatus {
  status: 'running' | 'idle' | 'error';
  lastCycle: string;
  profile: Record<string, unknown>;
  opportunities: number;
}

export const lifeguardCommands = {
  async status(): Promise<LifeguardStatus> {
    const profile = profiler.getProfile();
    const opps = await opportunityEngine.scan();

    console.log('\n📊 KOPSCLAW LIFEGUARD STATUS');
    console.log('================================');
    console.log(`Status: ✓ Running`);
    console.log(`Profile: ${JSON.stringify(profile, null, 2)}`);
    console.log(`Pending Opportunities: ${opps.length}`);
    console.log('================================\n');

    return {
      status: 'running',
      lastCycle: new Date().toISOString(),
      profile,
      opportunities: opps.length,
    };
  },

  async scan(): Promise<void> {
    console.log('\n🔍 Running Full Opportunity Scan...\n');
    await pushOpportunityCards();
    opportunityEngine.recordScan();
  },

  async profile(): Promise<void> {
    const prof = profiler.getProfile();
    console.log('\n📋 YOUR KOPSCLAW PROFILE');
    console.log('========================');
    console.log(JSON.stringify(prof, null, 2));
    console.log('========================\n');
  },

  async ingest(category: string, label: string): Promise<void> {
    profiler.ingest({
      category: category as any,
      label,
      confidence: 0.85,
    });
    console.log(`\n✅ Ingested ${category}: ${label}`);
  },
};

export default lifeguardCommands;
