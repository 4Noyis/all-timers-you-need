import { TimerCategory, TimerPreset } from "@/types/timer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: TimerCategory;
  isExpanded: boolean;
  selectedPreset?: TimerPreset;
  onToggleExpand: () => void;
  onSelectPreset: (preset: TimerPreset) => void;
}

export function CategoryCard({ 
  category, 
  isExpanded, 
  selectedPreset,
  onToggleExpand, 
  onSelectPreset 
}: CategoryCardProps) {
  return (
    <div className="relative">
      <div 
        className={cn("category-card", category.color)}
        data-category={category.id}
        onClick={onToggleExpand}
      >
        <div className="absolute top-4 right-4 opacity-70 z-10">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        <div className="flex items-end z-10 relative">
          <h3 className="mb-3 text-4xl font-bold">{category.name}</h3>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-3 animate-expand overflow-hidden">
          {category.presets.map((preset) => (
            <button
              key={preset.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelectPreset(preset);
              }}
              className={cn(
                "preset-pill",
                selectedPreset?.id === preset.id && "selected"
              )}
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <img
                    src={preset.icon || category.icon}
                    alt={preset.name}
                    className="w-10 h-10 object-contain opacity-70"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-foreground">{preset.name}</div>
                <div className="text-sm text-muted-foreground">
                  {Math.floor(preset.duration / 60)}min {preset.duration % 60 > 0 && `${preset.duration % 60}s`} • {preset.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}