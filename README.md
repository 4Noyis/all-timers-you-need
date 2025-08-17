# All Timers You Need

A modern, responsive web application that provides categorized timers for various activities including work/study sessions, cooking, meditation, workouts, and daily life activities.



![App Screenshot](/screenshot-phone-usage.png)

## Features

### Timer Categories
- **Work/Study**: Pomodoro sessions, focus time, breaks, deep work
- **Kitchen**: Coffee brewing, tea steeping, pasta cooking, egg boiling, rice cooking
- **Life**: Meditation, workouts, yoga, sleep cycles, skincare, tooth brushing

### Modern Design
- Clean, flat design with retro aesthetics
- Courier New monospace typography
- Layered box shadows and visual effects
- Card-specific background images
- Responsive grid layout

### Interactive Features
- Smooth expand/collapse animations for preset selection
- Visual timer progress with circular progress indicator
- Quick switch between presets during active timers
- Audio notifications when timers complete
- Toast notifications for user feedback

### Responsive Design
- Mobile-first approach
- Two-column layout on desktop
- Single-column layout on mobile
- Touch-friendly interface

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/timed-focus-hub.git
cd timed-focus-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

##  Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React hooks (useState, useEffect)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Data Fetching**: TanStack React Query

## Project Structure

```
src/
├── assets/               # Static assets and images
│   ├── *-presets/       # Category-specific preset icons
│   └── *.png            # Category icons
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── CategoryCard.tsx # Timer category card component
│   ├── SearchBar.tsx    # Search functionality
│   ├── TimerControls.tsx# Timer control buttons
│   └── TimerProgress.tsx# Circular progress indicator
├── data/
│   └── timerCategories.ts # Timer data and configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── types/               # TypeScript type definitions
│   └── timer.ts         # Timer-related types
├── App.tsx              # Main app component
├── index.css            # Global styles and animations
└── main.tsx             # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Customization

### Adding New Timer Categories

1. Import your icon:
```typescript
import newIcon from "@/assets/new-icon.png";
```

2. Add to `timerCategories.ts`:
```typescript
{
  id: "new-category",
  name: "New Category",
  color: "kitchen", // or "productivity", "life"
  icon: newIcon,
  presets: [
    {
      id: "preset-1",
      name: "Preset Name",
      duration: 5 * 60, // 5 minutes in seconds
      description: "Preset description",
      icon: presetIcon // optional preset-specific icon
    }
  ]
}
```

3. Add background image (optional):
```css
.category-card[data-category="new-category"]::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 20px;
  width: 100px;
  height: 100px;
  background-image: url('./assets/new-bg-image.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
}
```

### Customizing Sounds

Replace `/public/notification.mp3` with your preferred notification sound (supports MP3, WAV, OGG formats).

### Theming

Colors and themes can be customized in `/src/index.css` under the `:root` CSS variables section.

## Development

### Key Components

- **CategoryCard**: Displays timer categories with expand/collapse functionality
- **TimerProgress**: Circular progress indicator for active timers
- **TimerControls**: Start, pause, reset controls
- **SearchBar**: Filters categories by name

### State Management

The app uses React's built-in state management:
- `expandedCategory`: Tracks which category is currently expanded
- `selectedPreset`: Current selected timer preset
- `timerState`: Active timer state (running, paused, time remaining)
- `currentView`: Navigation between home and timer views

### Animation System

Custom CSS animations provide smooth transitions:
- `animate-expand`: Smooth expand animation for preset lists
- `animate-contract`: Smooth collapse animation
- Hover effects with scale and glow
- Smooth transitions using cubic-bezier easing

## Features in Detail

### Timer Categories

#### Work/Study (Productivity)
- Focus Session (25 min)
- Short Break (5 min)  
- Long Break (15 min)
- Deep Work (50 min)

#### Kitchen
- **Coffee**: French Press, Pour Over, Cold Brew, Espresso
- **Tea**: Green Tea, Black Tea, Herbal Tea
- **Pasta**: Fresh, Spaghetti, Penne, Rigatoni, Fettuccine, Fusilli, Macaroni
- **Rice**: White Rice, Brown Rice, Basmati Rice

#### Life
- **Meditation**: Quick Breath, Mindful Moment, Deep Session
- **Workout**: HIIT Cycle, Rest Interval, Tabata Set
- **Yoga**: Pose Hold, Sun Salutation, Relaxation
- **Sleep/Nap**: Power Nap, Full Sleep Cycle, Deep Rest
- **Skincare**: Face Mask, Scrub
- **Tooth Brushing**: Standard, Kids

## Audio Features

- Audio notification plays when timer completes
- Graceful fallback if audio cannot play (browser restrictions)
- Supports multiple audio formats

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



