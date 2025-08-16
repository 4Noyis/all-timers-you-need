import { TimerState } from "@/types/timer";
import { cn } from "@/lib/utils";

interface TimerProgressProps {
  timerState: TimerState;
  className?: string;
}

export function TimerProgress({ timerState, className }: TimerProgressProps) {
  const { timeRemaining, totalTime } = timerState;
  const progress = totalTime > 0 ? (totalTime - timeRemaining) / totalTime : 0;
  const circumference = 2 * Math.PI * 100; // radius of 100
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress * circumference);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn("timer-progress", className)}>
      <svg 
        className="timer-arc w-full h-full" 
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background track */}
        <circle
          cx="110"
          cy="110"
          r="100"
          fill="none"
          stroke="hsl(var(--progress-track))"
          strokeWidth="8"
          className="opacity-60"
        />
        
        {/* Progress arc */}
        <circle
          cx="110"
          cy="110"
          r="100"
          fill="none"
          stroke="hsl(var(--progress-fill))"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
          style={{
            filter: 'drop-shadow(0 0 8px hsl(var(--progress-fill) / 0.5))'
          }}
        />
        
        {/* Start marker */}
        {/* <circle
          cx="203"
          cy="110"
          r="6"
          fill="hsl(var(--progress-fill))"
          className="animate-pulse-gentle"
        /> */}
      </svg>
      
      {/* Digital countdown */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={cn(
          "text-5xl font-mono font-bold tracking-wider",
          timerState.isRunning && "animate-timer-tick"
        )}>
          {formatTime(timeRemaining)}
        </div>
        <div className="text-sm text-muted-foreground mt-2">
          {timerState.currentPreset?.name}
        </div>
      </div>
    </div>
  );
}