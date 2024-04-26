import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"button": "#F4511F",
				"secondary": "#DAD8D7"
			},
			supports: {
				"no-scroll-driven-animations": "not(animation-timeline: scroll())",
			}
		},
	},
	plugins: [animations],
}
