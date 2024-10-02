import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { Typography, Box, Button, Theme, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { getRandomIntArray, appendPx, appendDeg, palette } from "./tools";

import { lightThemeOptions, darkThemeOptions } from "./tools";

let lightTheme: Theme = createTheme(lightThemeOptions);
lightTheme = responsiveFontSizes(lightTheme);

const App = () => {
    return (
        <StrictMode>
            <ThemeProvider theme={lightTheme}>
                <Box display='flex' justifyContent='center' height='100dvh' width='100dvw' className='blue-purple-gradient-bg'>
                    <Box display='flex' flexDirection='column' justifyContent='center'
                    alignItems='center' gap='2rem' zIndex='1'>
                        <Typography variant="h1" fontWeight='bolder' color={palette.black}>Meal Planner</Typography>
                        <Button href="/auth/google" variant='contained'>Log in with Google</Button>
                        <Button href="/isloggedin" variant='contained'>Try in Sandbox Mode</Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </StrictMode>
    )
}

const root: Root = createRoot(document.getElementById("app")!);
root.render(<App/>);

// Emoji background animation
const emojiArr: Array<string> = ['🍕', '🍔', '🍟', '🌯', '🌮'];
setInterval(() => {
    const min: number = -20;
    const max: number = 20;
    let start: number = -20;
    let newEmoji = document.createElement('p');
    newEmoji.innerHTML = emojiArr[getRandomIntArray(0, emojiArr.length)];
    newEmoji.classList.add("floating-emoji");
    newEmoji.style.left = appendPx(getRandomIntArray(min, window.innerWidth+max).toString());
    newEmoji.style.top = appendPx(min.toString());
    newEmoji.style.rotate = appendDeg('0');
    // Check if page is currently active, else don't actually add the node and animate it
    if (!document.hidden) {
        document.body.appendChild(newEmoji);
        let animation = setInterval(() => {
            let height = parseInt(newEmoji.style.top);
            let rotation = parseInt(newEmoji.style.rotate);
            if (height < window.innerHeight) {
                newEmoji.style.top = appendPx((height + 1).toString());
                newEmoji.style.rotate = appendDeg((rotation + 1).toString());
            }
            else {
                newEmoji.remove();
                clearInterval(animation);
            }
        }, 10)
    }
}, 3000)