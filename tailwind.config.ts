import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Timer category colors
				pomodoro: {
					DEFAULT: 'hsl(var(--pomodoro))',
					light: 'hsl(var(--pomodoro-light))',
					foreground: 'hsl(var(--pomodoro-foreground))'
				},
				coffee: {
					DEFAULT: 'hsl(var(--coffee))',
					light: 'hsl(var(--coffee-light))',
					foreground: 'hsl(var(--coffee-foreground))'
				},
				meditation: {
					DEFAULT: 'hsl(var(--meditation))',
					light: 'hsl(var(--meditation-light))',
					foreground: 'hsl(var(--meditation-foreground))'
				},
				pasta: {
					DEFAULT: 'hsl(var(--pasta))',
					light: 'hsl(var(--pasta-light))',
					foreground: 'hsl(var(--pasta-foreground))'
				},
				egg: {
					DEFAULT: 'hsl(var(--egg))',
					light: 'hsl(var(--egg-light))',
					foreground: 'hsl(var(--egg-foreground))'
				},
				progress: {
					track: 'hsl(var(--progress-track))',
					fill: 'hsl(var(--progress-fill))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'timer-tick': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.03)', opacity: '0.9' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'arc-draw': {
					'0%': { 'stroke-dasharray': '0 628' },
					'100%': { 'stroke-dasharray': '628 628' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
				'accordion-up': 'accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'timer-tick': 'timer-tick 1s cubic-bezier(0.4, 0, 0.6, 1)',
				'arc-draw': 'arc-draw 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
				'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
				'shimmer': 'shimmer 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
