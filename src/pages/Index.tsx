import { useState, useEffect } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";
import { TimerProgress } from "@/components/TimerProgress";
import { TimerControls } from "@/components/TimerControls";
import { timerCategories } from "@/data/timerCategories";
import { TimerCategory, TimerPreset, TimerState } from "@/types/timer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<TimerPreset | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TimerCategory | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "timer">("home");
  const [timerState, setTimerState] = useState<TimerState>({
    isRunning: false,
    isPaused: false,
    timeRemaining: 0,
    totalTime: 0,
  });
  const { toast } = useToast();

  const filteredCategories = timerCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPreset = (preset: TimerPreset) => {
    const category = timerCategories.find(cat => 
      cat.presets.some(p => p.id === preset.id)
    );
    
    setSelectedPreset(preset);
    setSelectedCategory(category || null);
    setTimerState({
      isRunning: false,
      isPaused: false,
      timeRemaining: preset.duration,
      totalTime: preset.duration,
      currentCategory: category,
      currentPreset: preset,
    });
    setCurrentView("timer");
  };

  const handleStartTimer = () => {
    setTimerState(prev => ({ ...prev, isRunning: true, isPaused: false }));
  };

  const handlePauseTimer = () => {
    setTimerState(prev => ({ ...prev, isRunning: false, isPaused: true }));
  };

  const handleResetTimer = () => {
    if (selectedPreset) {
      setTimerState(prev => ({
        ...prev,
        isRunning: false,
        isPaused: false,
        timeRemaining: selectedPreset.duration,
      }));
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timerState.isRunning && timerState.timeRemaining > 0) {
      interval = setInterval(() => {
        setTimerState(prev => {
          if (prev.timeRemaining <= 1) {
            return { ...prev, timeRemaining: 0, isRunning: false };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerState.isRunning, timerState.timeRemaining]);

  useEffect(() => {
    if (timerState.timeRemaining === 0 && !timerState.isRunning && timerState.currentPreset) {
      // Play notification sound
      const audio = new Audio('/notification.mp3');
      audio.play().catch(error => {
        console.log('Could not play notification sound:', error);
      });

      toast({
        title: "Time's up!",
        description: `${timerState.currentPreset.name} timer completed`,
      });
    }
  }, [timerState.timeRemaining, timerState.isRunning, timerState.currentPreset, toast]);

  if (currentView === "timer") {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 
              className="text-4xl font-bold mb-4 cursor-pointer hover:text-primary/80 transition-colors"
              onClick={() => setCurrentView("home")}
            >
              All Timers You Need
            </h1>
            <div className="text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">{selectedCategory?.name}</span>
              <span className="mx-2">•</span>
              <span>{selectedPreset?.name}</span>
              <span className="mx-2">•</span>
              <span>{Math.floor((selectedPreset?.duration || 0) / 60)}min</span>
            </div>
          </header>

          <div className="flex flex-col items-center gap-8">
            <TimerProgress timerState={timerState} />
            <TimerControls
              timerState={timerState}
              onStart={handleStartTimer}
              onPause={handlePauseTimer}
              onReset={handleResetTimer}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-semibold mb-4 text-center">Quick Switch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {selectedCategory?.presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`preset-pill ${selectedPreset?.id === preset.id ? 'selected' : ''}`}
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <img 
                      src={preset.icon || selectedCategory.icon} 
                      alt={preset.name}
                      className="w-5 h-5 object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{preset.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {Math.floor(preset.duration / 60)}min
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-6 text-balance">All Timers You Need</h1>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search timers..."
          />
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isExpanded={expandedCategory === category.id}
                selectedPreset={selectedPreset}
                onToggleExpand={() => 
                  setExpandedCategory(expandedCategory === category.id ? null : category.id)
                }
                onSelectPreset={handleSelectPreset}
              />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No timers found</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different search term</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;