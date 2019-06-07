"use strict";

/** @type {String} For use proxy */
export const domain = '';

/** {String} Path to the root directory */
export const dir   = './source/';
export const dist = './public_html/wp-content/themes/project/';

export const assets = 'assets/';
export const scss   = 'scss/';
export const js     = 'assets/';
export const img    = 'img/';
export const raw    = '_raw/';

export const assetslist = [
    {
        name: 'Jquery',
        src: './node_modules/jquery/dist/**/*',
        dest: 'jquery/'
    },
    {
        name: 'Fancybox',
        src: './node_modules/@fancyapps/fancybox/dist/**/*',
        dest: 'fancybox/'
    },
    {
        name: 'Slick',
        src: './node_modules/slick-carousel/slick/**/*',
        dest: 'slick/',
    },
    {
        name: 'Appear',
        src: './node_modules/appear/dist/**/*',
        dest: 'appear/'
    },
    {
        name: 'Lettering',
        src: './node_modules/lettering/dist/**/*',
        dest: 'lettering/'
    },
    { // (Required for bootstrap dropdowns)
        name: 'Popper',
        src: './node_modules/popper.js/dist/umd/**/*',
        dest: 'popper.js/'
    },
    {
        name: 'Botstrap js',
        src: './node_modules/bootstrap/js/dist/**/*',
        dest: 'bootstrap/js/'
    },
    {
        name: 'Botstrap scss',
        src: './node_modules/bootstrap/scss/**/*',
        dest: 'bootstrap/scss/'
    },
    {
        name: 'Hamburgers',
        src: './node_modules/hamburgers/_sass/hamburgers/**/*',
        dest: 'hamburgers/'
    },
];

export const autoPrefixerConf = {
    browsers: ["last 12 versions", "> 1%", "ie 8", "ie 7"]
};

export const cleanCSSConf = {
    compatibility: "ie8",
    level: {
        1: {
            specialComments: 0,
            removeEmpty: true,
            removeWhitespace: true
        },
        2: {
            mergeMedia: true,
            removeEmpty: true,
            removeDuplicateFontRules: true,
            removeDuplicateMediaBlocks: true,
            removeDuplicateRules: true,
            removeUnusedAtRules: false
        }
    },
    rebase: false
};