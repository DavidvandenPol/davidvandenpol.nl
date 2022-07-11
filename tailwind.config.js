module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            'xxl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                backgroundColor: "#1C2532",
                lightBackgroundColor: "#253145",
                darkBackgroundColor: "#0B0E13",
                textColor: "#D7DDED",
                textGray: "#8B909C",
            },
        },
    },
}
