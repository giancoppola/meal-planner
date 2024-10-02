"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var material_1 = require("@mui/material");
var tools_1 = require("./tools");
var lightTheme = (0, material_1.createTheme)(tools_1.lightThemeOptions);
lightTheme = (0, material_1.responsiveFontSizes)(lightTheme);
var App = function () {
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, { theme: lightTheme, children: (0, jsx_runtime_1.jsx)(material_1.Box, { display: 'flex', justifyContent: 'center', height: '100dvh', width: '100dvw', className: 'blue-purple-gradient-bg', children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', zIndex: '1', children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h1", fontWeight: 'bolder', color: tools_1.palette.black, children: "Meal Planner" }), (0, jsx_runtime_1.jsx)(material_1.Button, { href: "/auth/google", variant: 'contained', children: "Log in with Google" }), (0, jsx_runtime_1.jsx)(material_1.Button, { href: "/isloggedin", variant: 'contained', children: "Try in Sandbox Mode" })] }) }) }) }));
};
var root = (0, client_1.createRoot)(document.getElementById("app"));
root.render((0, jsx_runtime_1.jsx)(App, {}));
(0, tools_1.emojiAnimation)();
