"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var material_1 = require("@mui/material");
var tools_1 = require("./tools");
var App = function () {
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', height: '100dvh', width: '100dvw', className: 'blue-purple-gradient', children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h1", fontWeight: 'bolder', children: "Meal Planner" }), (0, jsx_runtime_1.jsx)(material_1.Button, { href: "/auth/google", variant: 'contained', children: "Log in with Google" }), (0, jsx_runtime_1.jsx)(material_1.Button, { href: "/isloggedin", variant: 'contained', children: "Try in Sandbox Mode" })] }) }));
};
var root = (0, client_1.createRoot)(document.getElementById("app"));
root.render((0, jsx_runtime_1.jsx)(App, {}));
var emojiArr = ['🍕', '🍔', '🍟', '🌯', '🌮'];
setInterval(function () {
    var pageWidth = window.innerWidth;
    var min = -20;
    var max = 20;
    var newEmoji = document.createElement('p');
    newEmoji.innerHTML = emojiArr[(0, tools_1.getRandomIntArray)(0, emojiArr.length)];
    newEmoji.classList.add("floating-emoji");
    newEmoji.style.left = (0, tools_1.appendPx)((0, tools_1.getRandomIntArray)(min, pageWidth + max).toString());
    newEmoji.style.top = (0, tools_1.appendPx)(min.toString());
    document.body.appendChild(newEmoji);
}, 2000);
