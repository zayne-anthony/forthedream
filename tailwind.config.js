module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: "#FFFFFF",
			},
			fontFamily: {
				mont: ["Montserrat", "sans-serif"],
			},
			boxShadow: {
				solid: "0 0.25em 0 0 rgba(0,0,0,100)",
			},
			dropShadow: {
				solid: "0 0.25em 0 rgba(0,0,0,100)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
