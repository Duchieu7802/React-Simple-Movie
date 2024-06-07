/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["DM Sans", "sans-serif"],
			},
			colors: {
				primary: "#F62682",
				secondary: "rgb(111 92 241)",
			},
		},
	},
	plugins: [],
};
