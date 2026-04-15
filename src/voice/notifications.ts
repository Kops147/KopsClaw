// src/voice/notifications.ts
// Voice Notifications for High-Value Opportunities

export interface VoiceNotification {
  title: string;
  roiScore: number;
  action: string;
}

export async function speakOpportunity(opp: VoiceNotification) {
  const message = `🗣️ KopsClaw Alert: ${opp.title} — ROI ${opp.roiScore}% — ${opp.action}`;
  console.log(`\n${message}\n`);
  
  // Future: Integrate with:
  // - ElevenLabs API for high-quality voice
  // - macOS: say command
  // - Windows: Narrator or SAPI
  // - For now, clear console output serves as notification
}

export async function broadcastOpportunities(opps: VoiceNotification[]) {
  const highValue = opps.filter(o => o.roiScore > 80);
  
  if (highValue.length === 0) return;
  
  console.log('\n🔊 HIGH-VALUE OPPORTUNITIES DETECTED\n');
  for (const opp of highValue) {
    await speakOpportunity(opp);
  }
}
