# 🦞 KopsClaw — Smartest Global Autonomous Life-Easing Assistant

**Your personal AI that never sleeps and always works in your best interest.**

While other assistants wait for prompts, **KopsClaw watches, learns, scans the market, and proactively brings you opportunities**.

---

## Core Purpose

To make **Kopano Moagi's** life radically easier, more productive, and significantly more profitable — every single day.

---

## Key Capabilities

### 🧠 Deep Personal Intelligence
- Monitors files, documents, browser activity, and work patterns
- Builds a rich private knowledge graph about your skills, goals, and income potential
- Gets smarter the longer it runs
- Privacy-first: Everything stays local on your device

### 🚀 Autonomous Opportunity Engine
- Scans real job boards and freelance markets every 20 minutes
- Finds gigs, contracts, and side hustles that match your profile
- Scores them by ROI (Return on Investment) specifically for you
- Live feeds from Upwork, WeWorkRemotely, RemoteOK, and others

### 📢 Proactive Delivery
- Pushes high-value opportunities via Canvas dashboard
- Voice notifications for urgent/high-ROI items
- Actionable suggestions ("Draft proposal", "Open link", "Create service offering")
- Beautiful formatted cards with direct links

### ⚡ Intelligent & Efficient
- Uses local models (Ollama) first for privacy and speed
- Falls back to free models (Gemini, Hugging Face) when needed
- Never says "I can't" — always finds the best available model
- Smart model router: Local → Free → Fallback

### 🔒 Private by Design
- Runs 100% locally on your devices by default
- Your data never leaves your machine
- Open source and fully auditable

---

## Architecture

### The Nervous System

KopsClaw operates on two concurrent autonomous cycles:

1. **LifeGuard Cycle** (15 minutes)
   - Scans your personal profile (skills, goals, history)
   - Evaluates internal state and learned patterns
   - Triggers proactive recommendations

2. **Real-World Scanner** (20 minutes)
   - Hits live job boards via RSS feeds
   - Extracts job titles, descriptions, pay ranges
   - Scores ROI based on your profile
   - Displays opportunity dashboard

### The Stack

```
┌─────────────────────────────────────┐
│      CLI / Commands / Voice         │
├─────────────────────────────────────┤
│      Canvas (Cards + Actions)       │
├─────────────────────────────────────┤
│   Opportunity Engine + Scanner      │
├─────────────────────────────────────┤
│   Model Router (Ollama → Gemini)    │
├─────────────────────────────────────┤
│   Profiler (Skills, Goals, Learning)│
├─────────────────────────────────────┤
│   Node.js Runtime + TypeScript      │
└─────────────────────────────────────┘
```

---

## Current Status: **Production Ready** ✅

KopsClaw is now fully operational with:

- ✅ Real RSS job scanning (Upwork, WeWorkRemotely, RemoteOK)
- ✅ Autonomous 15 & 20-minute cycles
- ✅ Voice + visual proactive alerts
- ✅ CLI controls (`kopsclaw scan`, `kopsclaw status`, etc.)
- ✅ Smart model routing (Ollama → Gemini)
- ✅ Private by default, cloud-optional
- ✅ Income-first philosophy (ROI scoring)
- ✅ Beautiful opportunity dashboard
- ✅ One-click actions

**Built in Johannesburg for global ambition.**

---

## Quick Start

### Installation

```bash
git clone https://github.com/Kops147/KopsClaw.git
cd KopsClaw
pnpm install
pnpm build
npm install -g .
```

### Run

```bash
kopsclaw gateway
```

The gateway will:
- Start autonomous nervous system cycles
- Begin opportunity scanning
- Display real-time dashboard
- Alert you to high-ROI finds

### CLI Commands

```bash
# Check status
kopsclaw status

# Manual full scan
kopsclaw scan

# View your profile
kopsclaw profile

# Ingest a skill
kopsclaw ingest skill "Rust Programming"

# Ingest a goal
kopsclaw ingest goal "Get remote job in AI"
```

---

## How It Works

### 1. Build Your Profile

KopsClaw learns about you through ingestion:

```bash
kopsclaw ingest skill "TypeScript"
kopsclaw ingest skill "Node.js"
kopsclaw ingest skill "AI/ML"
kopsclaw ingest goal "3x income"
kopsclaw ingest goal "Build personal brand"
```

### 2. It Watches & Learns

The autonomous cycles run constantly:
- Learns from your behavior
- Gets smarter about what matters to you
- Builds a personal knowledge graph

### 3. Opportunities Surface

When high-ROI opportunities match your profile:
- **Canvas Dashboard** — Beautiful formatted cards
- **Voice Alerts** — Spoken notifications for urgent finds
- **Action Buttons** — One-click to "Draft proposal", "Open link", etc.

### 4. You Act

You click once, and KopsClaw has given you:
- The exact opportunity
- Why it matches you (ROI score, skills alignment)
- Immediate action to take

---

## Real-World Scanning

KopsClaw monitors these live feeds (no API key required):

- 🚀 **Upwork** — Remote AI/TypeScript/Node.js jobs
- 🌍 **WeWorkRemotely** — Vetted remote positions
- 🔗 **RemoteOK** — AI-specific remote work
- Plus custom RSS feeds you add

Results are scored by ROI and automatically filtered to match your profile.

---

## Philosophy

KopsClaw is built on these core beliefs:

1. **You shouldn't hunt for opportunities** — Your AI should
2. **You shouldn't wade through noise** — Only ROI-worthy alerts
3. **Everything should be actionable** — One click to move forward
4. **Success shouldn't require permission** — Local-first, always available
5. **You deserve a partner, not a gimmick** — Real intelligence, real results

---

## Privacy & Security

✅ **All local by default** — Profile stored on your device  
✅ **No cloud dependency** — Ollama runs on your machine  
✅ **Optional cloud models** — Gemini is fallback only  
✅ **Open source** — Fully auditable code  
✅ **Your data, your control** — You own everything  

---

## Future Roadmap

- 🎤 ElevenLabs voice synthesis
- 📊 Income tracking & ROI analytics
- 🌐 Multi-source web scraping (LinkedIn, Fiverr, etc.)
- 💬 Interactive chat for refining opportunities
- 🔔 Slack/Discord/Telegram notifications
- 📱 Mobile app for on-the-go access
- 🤖 Multi-agent orchestration
- 🔄 Self-improvement loop (learns from actions you take)

---

## Status: Production Ready

✅ **Phase 1: Autonomous Nervous System** ✅  
✅ **Phase 2: Opportunity Engine** ✅  
✅ **Phase 3: Advanced Intelligence** ✅  
✅ **Phase 4: Real-World Intelligence + Polish** ✅  

**KopsClaw is live and working 24/7.**

---

## Next Steps

1. **Daily Usage** — Keep `kopsclaw gateway:watch` running (or as a daemon)
2. **Feed Data** — Use CLI to ingest skills and goals
3. **Test Scanning** — Run `kopsclaw scan` to see real opportunities
4. **Share** — Push your repo public and show the world

---

**License**: MIT  
**Author**: Built in partnership with Kopano Moagi  
**Created**: April 15, 2026  
**Status**: Production Ready  

---

*"Success isn't about doing more — it's about doing smarter. Let KopsClaw handle the smarts."*

🦞 **KopsClaw: Always watching. Always working. Always yours.**
