import { TimerCategory } from "@/types/timer";

// Icons (placeholders – replace with your actual asset imports)
import pomodoroIcon from "@/assets/pomodoro-icon.png";
import coffeeIcon from "@/assets/coffee-icon.png";
import meditationIcon from "@/assets/meditation-icon.png";
import pastaIcon from "@/assets/pasta-icon.png";
import eggIcon from "@/assets/egg-icon.png";
import teaIcon from "@/assets/pasta-icon.png";
import riceIcon from "@/assets/pasta-icon.png";
import workoutIcon from "@/assets/pasta-icon.png";
import yogaIcon from "@/assets/pasta-icon.png";
import sleepIcon from "@/assets/pasta-icon.png";
import skincareIcon from "@/assets/pasta-icon.png";
import toothIcon from "@/assets/pasta-icon.png";

// pomodoro presets icons
import shortBreak from "@/assets/pomodoro-presets/break-100.png";
import longBreak from "@/assets/pomodoro-presets/long-break-100.png";
import focus from "@/assets/pomodoro-presets/focus-session-100.png";
import deepWork from "@/assets/pomodoro-presets/deep-work-100.png";

// coffe presets
import coldBrew from "@/assets/coffee-presets/cold-brew-100.png"
import espresso from "@/assets/coffee-presets/espresso-100.png"
import frenchPress from "@/assets/coffee-presets/french-press-100.png"
import pourOver from "@/assets/coffee-presets/pour-over-100.png"

//  tea presets
import greenTea from "@/assets/tea-presets/green-tea-100.png"
import herbalTea from "@/assets/tea-presets/herbal-tea-100.png"
import blackTea  from "@/assets/tea-presets/turkish-tea-100.png"

// egg presets
import egg6 from "@/assets/egg-presets/6minute-egg.png"
import egg7 from"@/assets/egg-presets/7minute-egg.png"
import egg8 from"@/assets/egg-presets/8minute-egg.png"
import egg10 from"@/assets/egg-presets/10minute-egg.png"

// pasta presets
import freshPasta from "@/assets/pasta-presets/fresh-pasta.png"
import spaghetti from "@/assets/pasta-presets/spaghetti.png"
import penne from "@/assets/pasta-presets/penne.png"
import rigatoni from "@/assets/pasta-presets/rigatoni.png"
import fettuccine from "@/assets/pasta-presets/fettuccine.png"
import fusilli from "@/assets/pasta-presets/fusilli.png"
import macaroni from "@/assets/pasta-presets/macaroni.png"

// rice presets
import whiteRice from "@/assets/rice-presets/white-rice.png"
import brownRice from "@/assets/rice-presets/brown-rice.png"
import basmatiRice from "@/assets/rice-presets/basmati-rice.png"

// meditation presets
import breath from "@/assets/meditation-presets/breath-100.png"
import meditation from "@/assets/meditation-presets/meditation-100.png"
import mindful from "@/assets/meditation-presets/mindful-100.png"

// workout presets
import workout from "@/assets/workout-presets/workout-100.png"

// yoga presets
import yoga from "@/assets/yoga-presets/yoga-hold-100.png"
import sun from "@/assets/yoga-presets/sun-100.png"
import relax from "@/assets/yoga-presets/relax-100.png"

// sleep presets
import sleep from "@/assets/sleep-presets/sleep-100.png"

// skincare presets
import facemask from "@/assets/skincare-presets/face-mask-100.png"
import scrub from "@/assets/skincare-presets/scrub-100.png"

// tooth brushing presets
import toothBrush from "@/assets/toothbrush-presets/toothbrush-100.png"



export const timerCategories: TimerCategory[] = [
  {
    id: "pomodoro",
    name: "Work/Study",
    color: "productivity",
    icon: pomodoroIcon,
    presets: [
      { id: "focus", name: "Focus Session", duration: 25 * 60, description: "25 minutes of focused work", icon: focus},
      { id: "short-break", name: "Short Break", duration: 5 * 60, description: "5 minute break",icon: shortBreak },
      { id: "long-break", name: "Long Break", duration: 15 * 60, description: "15 minute break",icon: longBreak },
      { id: "deep-work", name: "Deep Work", duration: 50 * 60, description: "50 minutes of deep focus", icon: deepWork },
    ]
  },


  {
    id: "pasta",
    name: "Pasta",
    color: "kitchen",
    icon: pastaIcon,
    presets: [
      { id: "fresh-pasta", name: "Fresh Pasta", duration: 3 * 60, description: "3 minutes homemade/fresh", icon: freshPasta},
      { id: "spaghetti", name: "Spaghetti", duration: 10 * 60, description: "10 minutes al dente", icon:spaghetti},
      { id: "penne", name: "Penne", duration: 12 * 60, description: "12 minutes perfect bite", icon:penne},
      { id: "rigatoni", name: "Rigatoni", duration: 14 * 60, description: "14 minutes firm texture", icon:rigatoni},
      { id: "fettuccine", name: "Fettuccine", duration: 9 * 60, description: "9 minutes flat ribbons", icon:fettuccine},
      { id: "fusilli", name: "Fusilli", duration: 10 * 60, description: "10 minutes spiral pasta" ,icon:fusilli},
      { id: "macaroni", name: "Macaroni", duration: 8 * 60, description: "8 minutes small elbows" ,icon:macaroni},
      
    ]
  },
  {
    id: "egg",
    name: "Egg",
    color: "kitchen",
    icon: eggIcon,
    presets: [
      { id: "soft-boiled", name: "Liquid yolk", duration: 6 * 60, description: "6 minutes runny yolk" ,icon: egg6},
      { id: "medium-boiled", name: "Almost set", duration: 7 * 60, description: "7 minutes jammy center",icon: egg7},
      { id: "hard-boiled", name: "Softly set", duration: 8 * 60, description: "8 minutes firm white", icon: egg8},
      { id: "perfect-boiled", name: "Hard boiled", duration: 10 * 60, description: "10 minutes fully set",icon: egg10},
    ]
  },
  {
    id: "tea",
    name: "Tea",
    color: "kitchen",
    icon: teaIcon,
    presets: [
      { id: "green", name: "Green Tea", duration: 3 * 60, description: "3 minutes steeping", icon:greenTea},
      { id: "black", name: "Black Tea", duration: 5 * 60, description: "5 minutes steeping",icon: blackTea },
      { id: "herbal", name: "Herbal Tea", duration: 7 * 60, description: "7 minutes steeping", icon: herbalTea},
    ]
  },
    {
    id: "coffee",
    name: "Coffee",
    color: "kitchen",
    icon: coffeeIcon,
    presets: [
      { id: "french-press", name: "French Press", duration: 4 * 60, description: "4 minutes brewing", icon: frenchPress},
      { id: "pour-over", name: "Pour Over", duration: 3 * 60, description: "3 minutes pour time", icon:pourOver},
      { id: "cold-brew", name: "Cold Brew", duration: 12 * 60 * 60, description: "12 hours steeping", icon:coldBrew },
      { id: "espresso", name: "Espresso Shot", duration: 30, description: "30 second extraction" , icon:espresso},
    ]
  },
  {
    id: "rice",
    name: "Rice",
    color: "kitchen",
    icon: riceIcon,
    presets: [
      { id: "white", name: "White Rice", duration: 18 * 60, description: "18 minutes cooking",icon:whiteRice },
      { id: "brown", name: "Brown Rice", duration: 35 * 60, description: "35 minutes cooking", icon:brownRice},
      { id: "basmati", name: "Basmati Rice", duration: 15 * 60, description: "15 minutes cooking", icon:basmatiRice},
    ]
  },
   {
    id: "meditation",
    name: "Meditation",
    color: "life",
    icon: meditationIcon,
    presets: [
      { id: "quick-breath", name: "Quick Breath", duration: 5 * 60, description: "5 minute breathing", icon:breath},
      { id: "mindful-moment", name: "Mindful Moment", duration: 10 * 60, description: "10 minute mindfulness", icon:mindful},
      { id: "deep-meditation", name: "Deep Session", duration: 20 * 60, description: "20 minute meditation", icon:meditation},
    ]
  },
  {
    id: "workout",
    name: "Workout",
    color: "life",
    icon: workoutIcon,
    presets: [
      { id: "hiit", name: "HIIT Cycle", duration: 30, description: "30 seconds high intensity", icon:workout},
      { id: "rest", name: "Rest Interval", duration: 60, description: "1 minute rest", icon:workout},
      { id: "tabata", name: "Tabata Set", duration: 4 * 60, description: "4 minutes of 20/10 intervals", icon:workout },
    ]
  },
  {
    id: "yoga",
    name: "Yoga",
    color: "life",
    icon: yogaIcon,
    presets: [
      { id: "pose-hold", name: "Pose Hold", duration: 60, description: "Hold pose for 1 minute", icon:yoga},
      { id: "sun-salutation", name: "Sun Salutation", duration: 15 * 60, description: "15 minutes flow",icon:sun },
      { id: "relax", name: "Relaxation", duration: 10 * 60, description: "10 minutes wind down", icon:relax},
    ]
  },
  {
    id: "sleep",
    name: "Sleep/Nap",
    color: "life",
    icon: sleepIcon,
    presets: [
      { id: "power-nap", name: "Power Nap", duration: 20 * 60, description: "20 minutes light nap",icon:sleep },
      { id: "full-cycle", name: "Full Sleep Cycle", duration: 90 * 60, description: "90 minutes complete cycle", icon:sleep },
      { id: "deep-rest", name: "Deep Rest", duration: 120 * 60, description: "2 hours rest", icon:sleep },
    ]
  },
  {
    id: "skincare",
    name: "Skincare",
    color: "life",
    icon: skincareIcon,
    presets: [
      { id: "face-mask", name: "Face Mask", duration: 15 * 60, description: "15 minutes mask", icon:facemask},
      { id: "scrub", name: "Scrub", duration: 5 * 60, description: "5 minutes exfoliation", icon:scrub},
    ]
  },
  {
    id: "tooth",
    name: "Tooth Brushing",
    color: "life",
    icon: toothIcon,
    presets: [
      { id: "standard", name: "Standard", duration: 2 * 60, description: "2 minutes brushing", icon:toothBrush },
      { id: "kids", name: "Kids", duration: 3 * 60, description: "3 minutes brushing", icon:toothBrush},
    ]
  },
];