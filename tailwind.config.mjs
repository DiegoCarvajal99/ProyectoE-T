/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#99c221', // Verde Original (Leaf)
					light: '#b5d64e',
					dark: '#7a9b1a',
				},
				secondary: {
					DEFAULT: '#1b3a6d', // Azul Original (Gear)
					light: '#2a5a9c',
					dark: '#112546',
				},
				accent: {
					DEFAULT: '#b1944a', // Oro Original (Text)
					light: '#d2b56a',
					dark: '#8a7338',
				},
				slate: {
					50: '#f8fafc',
					900: '#0f172a',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'Inter', 'sans-serif'],
			},
			letterSpacing: {
				tightest: '-.075em',
				tighter: '-.05em',
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			}
		},
	},
	plugins: [],
};
