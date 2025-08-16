import { TimerState } from "@/types/timer";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerControlsProps {
  timerState: TimerState;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export function TimerControls({ timerState, onStart, onPause, onReset }: TimerControlsProps) {
  const { isRunning, isPaused } = timerState;

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="outline"
        size="lg"
        onClick={onReset}
        className="w-14 h-14 rounded-full"
      >
        <RotateCcw size={20} />
      </Button>
      
      <Button
        size="lg"
        onClick={isRunning ? onPause : onStart}
        className="w-20 h-20 rounded-full text-lg font-semibold shadow-lg"
      >
        {isRunning ? <Pause size={24} /> : <Play size={24} />}
      </Button>
    </div>
  );
}