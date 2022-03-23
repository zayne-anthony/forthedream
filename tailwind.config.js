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
				primary: "#ffe187",
			},
			fontFamily: {
				mont: ["Montserrat", "sans-serif"],
				cartoon: ["Bangers", "cursive"],
			},
			dropShadow: {
				solid: "0.05em 0.05em 0 black",
			},
		},
	},
	plugins: [],
};
