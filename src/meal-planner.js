"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var test = "test";
// const bgGradient = "background: hsla(177, 87%, 79%, 1); background: linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%); background: -moz-linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%); background: -webkit-linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%); filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#9bf8f4", endColorstr="#6f7bf7", GradientType=1 );"
var App = function () {
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)("h1", { children: "HELL0 THERE" }) }));
};
var appContainer = document.getElementById("app");
var root = (0, client_1.createRoot)(appContainer);
root.render((0, jsx_runtime_1.jsx)(App, {}));
