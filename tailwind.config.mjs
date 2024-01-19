/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'md': '768px',
			'lg': '1440px',
		},
		extend: {
			colors: {
				light: "var(--clr-light)",
				dark: "var(--clr-dark)",
				primary: "var(--clr-primary)"
			}
		},
	},
	plugins: [],
}
