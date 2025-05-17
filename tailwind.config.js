/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFDF2',
          100: '#FFFDF2',
          200: '#FFFDF2',
          300: '#FFFDF2',
          400: '#FFFDF2',
          500: '#FFFDF2',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        accent: {
          50: '#FFFDF2',
          100: '#FFFDF2',
          200: '#FFFDF2',
          300: '#FFFDF2',
          400: '#FFFDF2',
          500: '#FFFDF2',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        dark: {
          50: '#FFFDF2',
          100: '#FFFDF2',
          200: '#FFFDF2',
          300: '#FFFDF2',
          400: '#FFFDF2',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(107, 115, 255, 0.3)',
        'glow-lg': '0 0 60px -15px rgba(107, 115, 255, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
        'scale-down': 'scaleDown 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.05)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'noise': "url('data:image/png;base64,idata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVwgkvjbhBgQjAVc3PwRmVDv3xTgzurVb660x9cPwg3GHXb+w3uH3L0w3+P0HSR5+PEGaB2Zz8OsBBgvMGOFvg5rwl5lHo3HPpFENBiOEqX5hssDfBmwO/jGYKhDhZyMqnIL/dGpklhHo1oAd6GagoA1nIyhnHKgoJ2j1YM+kXfqzMY6qvsvGhsI7mPYkxVQxOqka/LWuI9RlXYJ77nQmOl0vxuq1scvEn1pQ5fhRJu/yjK0+hZYPZAW0hCpdLzRdYUqDLI+PUw2gaQd3Cj3eWDkwpKBnXgMKFdR7HIESu9bVvqt2ZnElvBQkYltPYNnDSoj4Yl0GUo0ErbBR0m64rkvRgK4Rcv5dxpiCCGvf0FJIqFHxvLptQF/kjcHxaF6rQ+p2v7Z2VjPyuAUE8wqZ7HD+ZlAvcsCxiBKSR+QJkEqhB+4+ZdhKkDgGvtV7mmpk3YPyJjleZy8LpDknsYX1tfDXOGkI0+w1tnMmXwN0BmPnlZ/qCGMDR28WOm5gj4afgtCfwEc+cSI7ULR+BmQphB8E5vwBxHe/EPj1QK8xJE7AwAbkgWa7c4FW4wNgxQtqR2ziSGfWUEqwDQhx8gVqGVjwYkxCvHwB2sKnVIBtQIkTr6RxYCWM1IFmOx5A2XhA4tYrWvEJZpC4Zn6Fu9VVjhLUbbsEY1fgN1HWAe2P7yQJdiKXYIe/H0h41wN5wZgvcR2Rh2GpAzrj1yy6y1FbYOfxawYOGn/J1E9IH8LYG6RYILb/Bq2tR1TqA3h5L0iFWGRxPKVS+gNWQF+C2IkJDrj1EgQ+gN2XYd+PUyYN0QBxERYKUgF5gDiiAn0A+2UY9+MmMxKUgF5gkcWcR08eQBzhQj0QJ9RrwQK8Aicx3uU8fAVGQvL0FWhEkEQPXoHSiN/1C5Kk+UF8gEUE8QN5IAH8Aev6v9A3pM0SwdNKk+QAAAAASUVORK5CYII=')",
      },
    },
  },
  plugins: [],
};