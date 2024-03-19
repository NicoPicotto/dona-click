/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			azul: '#2E3192',
			naranja: '#FF7E00',
			blanco: '#f1f6f9',
			negro: '#121212',
		},
	},
	plugins: [],
};
