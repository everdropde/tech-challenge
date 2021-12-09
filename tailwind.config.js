module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['outline-none', 'rounded-xl'],
    },
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '1300px',
      },
    },
    minWidth: {
      auto: 'auto',
      400: '400px',
      300: '300px',
      250: '250px',
      200: '200px',
      125: '125px',
      75: '75px',
      full: '100%',
    },
    minHeight: {
      auto: 'auto',
      full: '100%',
      '80vh': '80vh',
      '60vh': '60vh',
    },
    letterSpacing: {
      widest: '.55em',
    },

    fontFamily: {
      display: ['SemplicitaPro'],
      body: ['Open Sans', 'sans-serif'],
    },

    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      screens: {
        xs: '380px',
      },
      spacing: {
        120: '30rem',
        '5vw': '5vw',
        '5.5vw': '5.5vw',
        '6vw': '6vw',
      },
      zIndex: {
        '-10': '-10',
      },
      height: {
        '60vw': '60vw',
        '80vh': '80vh',
        '95vh': '95vh',
      },
      maxHeight: {
        '95vh': '95vh',
      },
      maxWidth: {
        '8xl': '1920px',
        layout: '2460px',
        half: '50%',
        '2/3': '66.6667%',
        15: '15rem',
      },
      colors: {
        // brand
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',

        // backgrounds
        default: 'var(--default)',
        panel: 'var(--panel)',

        // actions
        hover: 'var(--hover)',

        // palette
        cyan: 'var(--cyan)',
        yellow: 'var(--yellow)',
        beige: 'var(--beige)',
        blue: 'var(--blue)',
        'light-blue': 'var(--lightBlue)',
        'light-gray': 'var(--lightGray)',
        'dark-gray': 'var(--darkGray)',
      },

      textColor: {
        default: 'var(--text-default)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },

      boxShadow: {
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
        button: '0 0 10px -5px rgba(0, 0, 0, 1)',
        'bottom-panel':
          '0px -10px 15px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.05)',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      fontSize: {
        '2xs': '.65rem',
      },
      scale: {
        120: '1.2',
      },
      backgroundImage: {
        yellowUnderline:
          'linear-gradient(to top, hsla(60, 100.00%, 67.65%, 1.00), hsla(60, 100.00%, 67.65%, 1.00) 40%, transparent 40%, transparent)',
      },
    },
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'focus', 'group-hover'],
      display: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
}
