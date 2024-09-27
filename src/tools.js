"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIntInclusive = void 0;
var getRandomIntInclusive = function (min, max) {
    var minCeiled = Math.ceil(min);
    var maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};
exports.getRandomIntInclusive = getRandomIntInclusive;
