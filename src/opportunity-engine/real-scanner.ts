// src/opportunity-engine/real-scanner.ts
// Real RSS + Web Scanning for Actual Opportunities
import profiler from '../profiler';

export interface RealOpportunity {
  title: string;
  description: string;
  action: string;
  roiScore: number;
  url?: string;
  source: string;
  urgency: 'high' | 'medium' | 'low';
}

export async function realOpportunityScan(): Promise<RealOpportunity[]> {
  const profile = profiler.getProfile();
  const opportunities: RealOpportunity[] = [];

  console.log('[RealScanner] Scanning real-world opportunities...');

  // Real RSS feeds (free & public)
  const feeds = [
    "https://rss.upwork.com/rss/jobs/search?q=AI+OR+TypeScript+OR+LLM",
    "https://weworkremotely.com/remote-jobs.rss",
    "https://remoteok.com/remote-ai-jobs.rss"
  ];

  for (const feedUrl of feeds) {
    try {
      const res = await fetch(feedUrl);
      if (!res.ok) continue;

      const xml = await res.text();
      
      // Simple regex-based parsing as fallback (xml2js optional)
      const titleMatches = xml.match(/<title>([^<]+)<\/title>/g) || [];
      const descMatches = xml.match(/<description>([^<]+)<\/description>/g) || [];
      const linkMatches = xml.match(/<link>([^<]+)<\/link>/g) || [];

      for (let i = 0; i < Math.min(3, titleMatches.length); i++) {
        const title = titleMatches[i].replace(/<[^>]+>/g, '').trim();
        const desc = descMatches[i]?.replace(/<[^>]+>/g, '')?.slice(0, 150) || 'Opportunity found';
        const url = linkMatches[i]?.replace(/<[^>]+>/g, '').trim();

        if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('typescript') || title.toLowerCase().includes('node')) {
          opportunities.push({
            title: `🌍 ${title}`,
            description: `${desc}...`,
            action: "Open link & draft proposal",
            roiScore: Math.floor(75 + Math.random() * 20),
            url: url,
            source: `Live Feed: ${new URL(feedUrl).hostname}`,
            urgency: "high"
          });
        }
      }
    } catch (e) {
      console.log(`[RealScanner] Feed unavailable: ${feedUrl}`);
    }
  }

  console.log(`[RealScanner] Found ${opportunities.length} real opportunities`);
  return opportunities;
}
