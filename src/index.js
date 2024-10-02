"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var material_1 = require("@mui/material");
var tools_1 = require("./tools");
var tools_2 = require("./tools");
var lightTheme = (0, material_1.createTheme)(tools_2.lightThemeOptions);
lightTheme = (0, material_1.responsiveFontSizes)(lightTheme);
var App = function () {
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, { theme: lightTheme, children: (0, jsx_runtime_1.jsx)(material_1.Box, { display: 'flex', justifyContent: 'center', height: '100dvh', width: '100dvw', className: 'blue-purple-gradient-bg', children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', zIndex: '1', children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h1", fontWeight: 'bolder', color: tools_1.palette.black, children: "Meal Planner" }), (0, jsx_runtime_1.jsx)(material_1.Button, { href: "/auth/google", variant: 'contained', children: "Log in with Google" }), (0, jsx_runtime_1.jsx)(material_1.Button, { href: "/isloggedin", variant: 'contained', children: "Try in Sandbox Mode" })] }) }) }) }));
};
var root = (0, client_1.createRoot)(document.getElementById("app"));
root.render((0, jsx_runtime_1.jsx)(App, {}));
// Emoji background animation
var emojiArr = ['🍕', '🍔', '🍟', '🌯', '🌮'];
setInterval(function () {
    var min = -20;
    var max = 20;
    var start = -20;
    var newEmoji = document.createElement('p');
    newEmoji.innerHTML = emojiArr[(0, tools_1.getRandomIntArray)(0, emojiArr.length)];
    newEmoji.classList.add("floating-emoji");
    newEmoji.style.left = (0, tools_1.appendPx)((0, tools_1.getRandomIntArray)(min, window.innerWidth + max).toString());
    newEmoji.style.top = (0, tools_1.appendPx)(min.toString());
    newEmoji.style.rotate = (0, tools_1.appendDeg)('0');
    // Check if page is currently active, else don't actually add the node and animate it
    if (!document.hidden) {
        document.body.appendChild(newEmoji);
        var animation_1 = setInterval(function () {
            var height = parseInt(newEmoji.style.top);
            var rotation = parseInt(newEmoji.style.rotate);
            if (height < window.innerHeight) {
                newEmoji.style.top = (0, tools_1.appendPx)((height + 1).toString());
                newEmoji.style.rotate = (0, tools_1.appendDeg)((rotation + 1).toString());
            }
            else {
                newEmoji.remove();
                clearInterval(animation_1);
            }
        }, 10);
    }
}, 3000);
