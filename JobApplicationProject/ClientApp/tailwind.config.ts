/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
const colors = require('material-ui-colors')
module.exports = withMT({
    content: [
        './src/**/(*.tsx|*.ts|*.css|*.scss)',
        './src/**/(*.html)',
        './@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        './@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')",
                search: 'url(https://images.unsplash.com/photo-1629196613836-0a7e2541990a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2634&q=80)',
                company:
                    'url(https://images.unsplash.com/photo-1629196214806-2fe3a64cb875?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                jobs: 'url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            },
            height: {
                '70vh': '70vh',
                '600': '600px',
                '700': '700px',
                '800': '800px',
                '900': '900px',
                '1000': '1000px'
            },
            padding: {
                '0.5px': '0.5px'
            },
            width: {
                '112': '28rem',
                '128': '32rem'
            },
            maxWidth: {
                '150': '155px',
                '200': '200px',
                '250': '250px',
                '300': '300px',
                '312': '312px',
                '350': '350px'
            },
            minWidth: {
                '8': '2rem',
                '10': '2.5rem',
                '150': '155px',
                '200': '200px',
                '250': '250px',
                '350': '350px'
            },
            colors: {
                ...colors,
                black: {
                    900: 'rgb(18, 18, 18)',
                    1000: '#000000'
                }
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif']
            },
            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
                '3xl': '1921px'
                // => @media (min-width: 1920px) { ... }
            }
        }
    }
})
