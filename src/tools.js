"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiAnimation = exports.palette = exports.darkThemeOptions = exports.lightThemeOptions = exports.appendDeg = exports.appendPx = exports.getRandomIntArray = exports.getRandomIntInclusive = void 0;
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
// Emoji background animation
var emojiArr = ['🍕', '🍔', '🍟', '🌯', '🌮'];
var emojiAnimation = function () {
    setInterval(function () {
        var min = -20;
        var max = 20;
        var start = -20;
        var newEmoji = document.createElement('p');
        newEmoji.innerHTML = emojiArr[(0, exports.getRandomIntArray)(0, emojiArr.length)];
        newEmoji.classList.add("floating-emoji");
        newEmoji.style.left = (0, exports.appendPx)((0, exports.getRandomIntArray)(min, window.innerWidth + max).toString());
        newEmoji.style.top = (0, exports.appendPx)(min.toString());
        newEmoji.style.rotate = (0, exports.appendDeg)('0');
        // Check if page is currently active, else don't actually add the node and animate it
        if (!document.hidden) {
            document.body.appendChild(newEmoji);
            var animation_1 = setInterval(function () {
                var height = parseInt(newEmoji.style.top);
                var rotation = parseInt(newEmoji.style.rotate);
                if (height < window.innerHeight) {
                    newEmoji.style.top = (0, exports.appendPx)((height + 1).toString());
                    newEmoji.style.rotate = (0, exports.appendDeg)((rotation + 1).toString());
                }
                else {
                    newEmoji.remove();
                    clearInterval(animation_1);
                }
            }, 10);
        }
    }, 3000);
};
exports.emojiAnimation = emojiAnimation;
