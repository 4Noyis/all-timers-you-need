# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"All Timers You Need" is a React-based web application that provides categorized timers for various activities like Pomodoro sessions, coffee brewing, meditation, cooking pasta, and boiling eggs. Built with TypeScript, Vite, React Router, and styled with Tailwind CSS + shadcn/ui components.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Core Structure
- **Single-page application** with React Router for navigation
- **Main views**: Home (timer selection) and Timer (active timer interface)
- **State management**: React hooks with local component state
- **UI framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming

### Key Files
- `/src/App.tsx` - App shell with routing, providers (QueryClient, TooltipProvider, Toasters)
- `/src/pages/Index.tsx` - Main page component handling both home and timer views
- `/src/data/timerCategories.ts` - Static timer data with categories and presets
- `/src/types/timer.ts` - TypeScript interfaces for TimerCategory, TimerPreset, TimerState
- `/components.json` - shadcn/ui configuration with path aliases

### Component Architecture
- **CategoryCard** - Displays timer category with expandable preset list
- **TimerProgress** - Circular progress indicator for active timer
- **TimerControls** - Start/pause/reset controls for timer
- **SearchBar** - Filters timer categories by name
- **UI Components** - Complete shadcn/ui component library in `/src/components/ui/`

### Data Model
```typescript
TimerCategory {
  id: string
  name: string  
  color: string (for theming)
  icon: string (asset path)
  presets: TimerPreset[]
}

TimerPreset {
  id: string
  name: string
  duration: number (seconds)
  description?: string
}

TimerState {
  isRunning: boolean
  isPaused: boolean  
  timeRemaining: number
  totalTime: number
  currentCategory?: TimerCategory
  currentPreset?: TimerPreset
}
```

### Timer Implementation
- Uses `setInterval` with 1-second precision
- Automatic cleanup with `useEffect` dependencies
- Toast notifications on completion via `useToast` hook
- State transitions: stopped → running → paused → stopped

### Asset Management
- Timer category icons stored in `/src/assets/`
- Icons imported as static assets and referenced in timer data
- Public assets (favicon, etc.) in `/public/`

## Path Aliases
Configured in `components.json` and TypeScript:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/types` → `src/types`
- `@/data` → `src/data`
- `@/assets` → `src/assets`