"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palette = exports.darkThemeOptions = exports.lightThemeOptions = exports.appendDeg = exports.appendPx = exports.getRandomIntArray = exports.getRandomIntInclusive = void 0;
var getRandomIntInclusive = function (min, max) {
    var minCeiled = Math.ceil(min);
    var maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};
exports.getRandomIntInclusive = getRandomIntInclusive;
var getRandomIntArray = function (min, max) {
    var minCeiled = Math.ceil(min);
    var maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};
exports.getRandomIntArray = getRandomIntArray;
var appendPx = function (word) {
    return word + 'px';
};
exports.appendPx = appendPx;
var appendDeg = function (word) {
    return word + "deg";
};
exports.appendDeg = appendDeg;
exports.lightThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#3943b7',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#b8b9ff',
            contrastText: '#1c2321',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#1c2321',
            secondary: "rgba(28, 35, 33, 0.6)",
            disabled: "rgba(28, 35, 33, 0.38)",
        },
    },
};
exports.darkThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#b8b9ff',
            contrastText: '#1c2321',
        },
        secondary: {
            main: '#3943b7',
            contrastText: '#ffffff',
        },
        background: {
            default: '#1c2321',
            paper: '#1c2321',
        },
        text: {
            primary: '#1c2321',
            secondary: "rgba(28, 35, 33, 0.6)",
            disabled: "rgba(28, 35, 33, 0.38)",
        }
    },
};
exports.palette = {
    purple: '#b8b9ff',
    lightBlue: '#d1faff',
    black: '#1c2321',
    white: '#ffffff',
    darkBlue: '#3943b7',
    green: '#d7f171',
};
