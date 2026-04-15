// src/bootstrap/kopsclaw-autonomy.ts
// KopsClaw Autonomous Systems Bootstrap
// Initializes profiler, opportunity engine, and lifeguard cycle

import profiler from '../profiler';
import opportunityEngine from '../opportunity-engine';
import { pushOpportunityCards } from '../canvas/cards';
import { scanOpportunities } from '../opportunity-engine/scanner';
import { pushProactiveCards } from '../canvas/proactive';
import { triggerProactiveActions } from '../canvas/actions';
import { lifeguardCommands } from '../cli/lifeguard';

export interface AutonomyConfig {
  scanIntervalMinutes?: number;
  autoIngest?: boolean;
  voiceNotifications?: boolean;
}

let autonomyInitialized = false;
let lifeguardInterval: NodeJS.Timeout | null = null;

export async function initializeKopsClawAutonomy(config: AutonomyConfig = {}): Promise<void> {
  if (autonomyInitialized) {
    console.log('[KopsClawAutonomy] Already initialized');
    return;
  }

  const {
    scanIntervalMinutes = 15,
    autoIngest = true,
    voiceNotifications = false,
  } = config;

  console.log('\n🦞 Initializing KopsClaw Autonomous Systems...');

  // 1. Initialize profiler with default skills/goals if not set
  const profile = profiler.getProfile();
  if (profile.skills.length === 0) {
    profiler.ingest({
      category: 'skill',
      label: 'TypeScript',
      confidence: 0.95,
    });
    profiler.ingest({
      category: 'skill',
      label: 'Node.js',
      confidence: 0.95,
    });
    profiler.ingest({
      category: 'goal',
      label: 'Increase income 3x',
      confidence: 0.9,
    });
    console.log('✓ Profiler initialized with default skills & goals');
  }

  // 2. Start periodic opportunity scanning
  const scanInterval = scanIntervalMinutes * 60 * 1000;
  
  lifeguardInterval = setInterval(async () => {
    console.log(`\n[LifeGuard Cycle] Running opportunity scan...`);
    
    if (await opportunityEngine.shouldScan()) {
      try {
        const opps = await opportunityEngine.scan();
        opportunityEngine.recordScan();
        
        if (opps.length > 0) {
          console.log(`✓ Found ${opps.length} new opportunities!`);
          await pushOpportunityCards();
          
          // Enhanced LifeGuard cycle with scanner
          const scanResults = await scanOpportunities();
          if (scanResults.length > 0) {
            await pushProactiveCards();
          }
          
          if (voiceNotifications) {
            console.log('🔔 [Voice notification would play here]');
          }
        } else {
          console.log('✓ No new opportunities at this time.');
        }
      } catch (e) {
        console.error(`[LifeGuard] Scan error:`, (e as Error).message);
      }
    }
  }, scanInterval);

  console.log('✓ Profiler ready');
  console.log(`✓ LifeGuard autonomous agent running (${scanIntervalMinutes}-min cycles)`);
  console.log(`✓ Opportunity engine active`);
  
  // 3. Start real-world opportunity scanning (every 20 minutes)
  setInterval(async () => {
    console.log(`\n[ProactiveActions] Scanning real-world opportunities...`);
    try {
      await triggerProactiveActions();
    } catch (e) {
      console.error(`[ProactiveActions] Error:`, (e as Error).message);
    }
  }, 20 * 60 * 1000);
  
  console.log('✓ Real-world opportunity scanner active (20-min cycles)');
  console.log('\n✅ KopsClaw Autonomy Initialized\n');

  autonomyInitialized = true;
}

export async function stopKopsClawAutonomy(): Promise<void> {
  if (lifeguardInterval) {
    clearInterval(lifeguardInterval);
    lifeguardInterval = null;
  }
  console.log('[KopsClawAutonomy] Stopped');
  autonomyInitialized = false;
}

export function isAutonomyInitialized(): boolean {
  return autonomyInitialized;
}

export default {
  initializeKopsClawAutonomy,
  stopKopsClawAutonomy,
  isAutonomyInitialized,
  lifeguardCommands,
};
