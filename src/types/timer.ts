export interface TimerPreset {
  id: string;
  name: string;
  duration: number; // in seconds
  description?: string;
  icon?: string;
}

export interface TimerCategory {
  id: string;
  name: string;
  color: string;
  icon: string;
  presets: TimerPreset[];
}

export interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  timeRemaining: number;
  totalTime: number;
  currentCategory?: TimerCategory;
  currentPreset?: TimerPreset;
}