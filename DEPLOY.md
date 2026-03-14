# Vibe Guru — Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
npm install -g vercel
cd vibe-guru
vercel login
vercel deploy --prod
```

### Option 2: Vercel Dashboard
1. Go to https://vercel.com/new
2. Import this project from GitHub or upload the folder
3. Set environment variable: `ANTHROPIC_API_KEY=your_key`
4. Deploy

### Option 3: GitHub Integration
1. Push this repo to GitHub
2. Connect to Vercel via vercel.com/new
3. Auto-deploys on push

## Required Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key from console.anthropic.com |

## Local Development
```bash
npm install
cp .env.example .env.local
# Edit .env.local with your API key
npm run dev
```

## Architecture

- **Frontend**: Next.js 14 + Tailwind CSS + Buddhist tranquility theme
- **Chat Engine**: Vercel AI SDK v3 + Anthropic Claude Sonnet 4
- **System**: Vibe Marketing Playbook orchestration agent (Vibe Guru)
- **Sidebar**: Real-time progress tracker + agent hierarchy map
