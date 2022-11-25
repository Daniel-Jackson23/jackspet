/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",],
    theme: {
        screens: {
            sm: '370px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },

        extend: {
            colors: {
                'dark-blue': '#05386B',
                'dark-green': '#379683',
                'green': '#5CDB95',
                'light-green': '#8EE4AF',
                'white-text': '#EDF5E1',
                'yellow-bg': '#f3ec00',
                'blue-button': '#0ea5e9'
            },
        },
    },
    plugins: [],
}
