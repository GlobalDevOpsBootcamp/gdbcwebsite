/*
 * A tailwinds config file used to generate atomic utility css classes.
 * See: https://tailwindcss.com/docs/configuration/
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 *
 * Run '$ npm run css:dev' to compile changes in this file.
 */
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    purge: [
        '{,!(node_modules|_site)/**/}*.{html,md}',
    ],
    extend: {
        lineClamp: {
            10: '10'
        },
        spacing: {
            128: '32rem',
            160: '40rem'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                lg: '1.5rem'
            },
            screens: {
                lg: '1152px'
            }
        },
        colors: {
            turqoise: colors.cyan,
            gray: colors.blueGray,
            'dark-alternate': '#212224',
            'dark-200': '#1F2129',
            'dark-300': '#2B2D33',
            'gdbc-orange': '#ef8300'
        },
        borderRadius: {
            medium: '0.312rem'
        },
        boxShadow: {
            drawer: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            testimonial: '0 63px 50px 0 rgba(0,0,0,0.07)',
            blue: '0 0px 60px 15px rgba(55, 125, 255, 0.1)'
        },
        gradientColorStops: ['group-hover']
    },
    fontFamily: {
        sans: 'Raleway',
        inter: 'Inter, sans-serif'
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}