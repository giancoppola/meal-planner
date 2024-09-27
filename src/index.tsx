import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { Typography, Box, Button } from "@mui/material";
import { getRandomIntInclusive } from "./tools";

const App = () => {
    return (
        <StrictMode>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'
            gap='2rem' height='100dvh' width='100dvw' className='blue-purple-gradient'>
                <Typography variant="h1" fontWeight='bolder'>Meal Planner</Typography>
                <Button href="/auth/google" variant='contained'>Log in with Google</Button>
                <Button href="/isloggedin" variant='contained'>Try in Sandbox Mode</Button>
            </Box>
        </StrictMode>
    )
}

const root: Root = createRoot(document.getElementById("app")!);
root.render(<App/>);

const emojiArr: Array<string> = ['🍕', '🍔', '🍟', '🌯', '🌮'];
setInterval(() => {
    let pageWidth: number = window.innerWidth;
    let min: number = -20;
    let newEmoji = document.createElement('p');
    newEmoji.innerHTML = emojiArr[getRandomIntInclusive(0, emojiArr.length)];
    newEmoji.classList.add("floating-emoji");
    newEmoji.style.left = getRandomIntInclusive(min, pageWidth).toString();
    newEmoji.style.top = min.toString();
    document.body.appendChild(newEmoji);
    while(newEmoji.style.left < window.innerHeight.toString()) {
        newEmoji.style.left = parseInt(newEmoji.style.left)
    }
}, 2000)