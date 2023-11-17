/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lima': {
					'50': '#f9ffe5',
					'100': '#eeffc7',
					'200': '#ddff95',
					'300': '#c5fe58',
					'400': '#acf526',
					'500': '#8cdc06',
					'600': '#7ac800',
					'700': '#518506',
					'800': '#42690b',
					'900': '#38580f',
					'950': '#1b3201',
				},
				'finn': {
					'50': '#fef5fe',
					'100': '#fcebfc',
					'200': '#f9d5f7',
					'300': '#f3b4ed',
					'400': '#ea88de',
					'500': '#db5acc',
					'600': '#bf3aad',
					'700': '#9e2d8c',
					'800': '#812771',
					'900': '#5d2051',
					'950': '#450d3a',
				},				
			}
		},
	},
	plugins: [],
}
