/*
 * A tailwinds config file used to generate atomic utility css classes.
 * See: https://tailwindcss.com/docs/configuration/
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 *
 * Run '$ npm run css:dev' to compile changes in this file.
 */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    purge: [
        '{,!(node_modules|_site)/**/}*.{html,md}',
    ],
    theme: {
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
                'dark-alternate': '#212224',
                'dark-200': '#1F2129',
                'dark-300': '#2B2D33',
                'gdbc-orange': '#ef8300'
            },
            typography(theme) {
                return {
                  dark: {
                    css: {
                      color: theme("colors.gray.300"),
                      '[class~="lead"]': { color: theme("colors.gray.400") },
                      a: { color: theme("colors.gray.100") },
                      strong: { color: theme("colors.gray.100") },
                      "ul > li::before": { backgroundColor: theme("colors.gray.700") },
                      hr: { borderColor: theme("colors.gray.800") },
                      blockquote: {
                        color: theme("colors.gray.100"),
                        borderLeftColor: theme("colors.gray.800"),
                      },
                      h1: { color: theme("colors.gray.100") },
                      h2: { color: theme("colors.gray.100") },
                      h3: { color: theme("colors.gray.100") },
                      h4: { color: theme("colors.gray.100") },
                      code: { color: theme("colors.gray.100") },
                      "a code": { color: theme("colors.gray.100") },
                      pre: {
                        color: theme("colors.gray.200"),
                        backgroundColor: theme("colors.gray.800"),
                      },
                      thead: {
                        color: theme("colors.gray.100"),
                        borderBottomColor: theme("colors.gray.700"),
                      },
                      "tbody tr": { borderBottomColor: theme("colors.gray.800") },
                    },
                  },
                }
            },
            borderRadius: {
                medium: '0.312rem'
            },
            boxShadow: {
                drawer: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                testimonial: '0 63px 50px 0 rgba(0,0,0,0.07)',
                blue: '0 0px 60px 15px rgba(55, 125, 255, 0.1)'
            },
            gradientColorStops: ['group-hover'],
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            }
        }
    },
    variants: {
        extend: { typography: ["dark"] }
      },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}