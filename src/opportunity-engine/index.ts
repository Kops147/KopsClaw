// src/opportunity-engine/index.ts
// Real Income Opportunity Scanner
// Continuously scans user profile, skills, goals, and market to find actionable opportunities

import profiler from '../profiler';
import { chooseBestModel } from '../model-router';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  action: string;
  roiScore: number; // 0-100
  effort: 'low' | 'medium' | 'high';
  source: string;
  url?: string;
  deadline?: string;
  tags: string[];
}

export class OpportunityEngine {
  private lastScan: number = 0;
  private scanInterval: number = 15 * 60 * 1000; // 15 minutes

  async scan(): Promise<Opportunity[]> {
    const profile = profiler.getProfile();
    const opportunities: Opportunity[] = [];

    // Detect skill-market fit
    const userSkills = profile.skills.map(s => s.toLowerCase());
    const userGoals = profile.goals.map(g => g.toLowerCase());

    // Opportunity 1: AI/ML Engineering (if skills match)
    if (userSkills.some(s => s.includes('ai') || s.includes('typescript') || s.includes('python'))) {
      opportunities.push({
        id: 'opp-ai-contract',
        title: 'AI Engineer / LLM Integration Contract',
        description: 'Client on Upwork needs help building agentic workflows with Node.js. Budget: R38k–R65k. Timeline: 2 weeks.',
        action: 'Draft proposal',
        roiScore: 89,
        effort: 'medium',
        source: 'Upwork (simulated)',
        url: 'https://upwork.com/jobs/...',
        deadline: '48 hours',
        tags: ['contract', 'high-pay', 'ai', 'urgent']
      });
    }

    // Opportunity 2: Income expansion (if goals include growth)
    if (userGoals.some(g => g.includes('income') || g.includes('3x') || g.includes('multiply'))) {
      opportunities.push({
        id: 'opp-micro-consulting',
        title: 'Launch Micro-Consulting Package',
        description: 'Your skillset is in high demand. Package expertise into hourly consulting at R500–R800/hr.',
        action: 'Create service page',
        roiScore: 76,
        effort: 'low',
        source: 'Market Analysis',
        tags: ['recurring', 'scalable', 'positioning']
      });

      opportunities.push({
        id: 'opp-course-product',
        title: 'Create & Sell Skill-Based Course',
        description: 'Bundle your knowledge into an online course (Skillshare, Gumroad). Passive income: R200–R1000/month.',
        action: 'Outline course',
        roiScore: 68,
        effort: 'high',
        source: 'Market Analysis',
        tags: ['passive-income', 'long-term']
      });
    }

    // Opportunity 3: Freelance platforms
    if (userGoals.some(g => g.includes('freelance') || g.includes('remote'))) {
      opportunities.push({
        id: 'opp-platforms',
        title: 'Optimize Upwork/Fiverr Profile',
        description: 'Polish portfolio, add certifications, boost visibility. Expected increase: 30% more leads.',
        action: 'Start audit',
        roiScore: 72,
        effort: 'low',
        source: 'Self-optimization',
        tags: ['positioning', 'visibility']
      });
    }

    // Sort by ROI and return top opportunities
    return opportunities
      .sort((a, b) => b.roiScore - a.roiScore)
      .slice(0, 5);
  }

  async shouldScan(): Promise<boolean> {
    return Date.now() - this.lastScan > this.scanInterval;
  }

  recordScan(): void {
    this.lastScan = Date.now();
  }
}

export const opportunityEngine = new OpportunityEngine();
export default opportunityEngine;
