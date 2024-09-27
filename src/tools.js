"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendPx = exports.getRandomIntArray = exports.getRandomIntInclusive = void 0;
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
