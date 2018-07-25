const minimist = require("minimist");
const options = minimist(process.argv.slice(2));
const isProduction = options.env === 'production';

config = {
    console_options: options,
    isProduction: isProduction,

    src: {
        js: "./sec/js/**/*.js",
        vue: "./src/js/app.js",
        vue_watch: "./src/js/**/*.{js,vue}",
        scss: "./src/scss/**/*.scss",
        fonts: [
            "./node_modules/font-awesome/fonts/**",
        ],
        lib: {
            js: [
                "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/bootstrap/dist/js/bootstrap.min.js",
            ]
        },
    },

    dist: {
        js: "./assets/js",
        css: "./assets/css",
        fonts: "./assets/fonts",
        vue: "app.js",
    },

    map: "./.map",

    lib: {
        js: "lib.js",
    },

    options: {
        eslint: {
            configFile: ".eslintrc.js",
        },
    },

    plugins : require("gulp-load-plugins")(),
};

module.exports = config;
