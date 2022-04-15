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
				primary: "#CCF4B1",
			},
			fontFamily: {
				mont: ["Montserrat", "sans-serif"],
				cartoon: ["Blueberry"],
				skrap: ["Skrapbook"],
			},
			dropShadow: {
				solid: "0.05em 0.05em 0 black",
			},
			screens: {
				laptop: "1440px",
			},
		},
	},
	plugins: [],
};
