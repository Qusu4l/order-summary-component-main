/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.{html,js}'],
	theme: {
		extend: {},
		fontFamily: {
			redHotDisplay: ['Red Hat Display'],
		},
		backgroundImage: {
			'mobile': "url('images/pattern-background-mobile.svg')",
			'desktop': "url('images/pattern-background-desktop.svg')",
		},
	},
	plugins: [],
}
