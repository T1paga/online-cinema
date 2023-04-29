/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			black: colors.black,
			white: '#E8E8E8',
			active: '#3DD2CC',
			danger: colors.red,
			semiActive: 'rgba(61, 210, 204, 0.4)',
			gray: {
				100: '#666666', //светло-серый текст
				200: '#212121', // темный фон
				300: '#191919', // сильно темный фон
			},
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.flex-start': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'start',
				},
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
			})
		}),
	],
}
