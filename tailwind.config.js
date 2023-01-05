/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",],
    darkMode: 'mode',
    theme: {
        screens: {
            sm: '370px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui',],
            'serif': ['ui-serif', 'Georgia',],
            'mono': ['ui-monospace', 'SFMono-Regular',],
            'display': ['Oswald',],
            'body': ['"Open Sans"',],
        },

        extend: {
            colors: {
                'primary-bg': '#DAD7CD',
                'primary-text': '#344E41',
                'primary-green-100': '#A3B18A',
                'primary-green-200': '#588157',
                'primary-green-300': '#3A5A40',
                'button-primary': '#023E8A',
                'button-primary-100': '#0077B6',
                //     Dark mode colours
                'dark-text-white': '#fff',
                'dark-primary-bg': '#374151',
                'dark-button-primary': '#1e293b',


            },
        },
    },
    plugins: [],
}
