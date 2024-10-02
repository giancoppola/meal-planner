import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { Typography, Box, Button, Theme, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { getRandomIntArray, appendPx, appendDeg, palette, lightThemeOptions, darkThemeOptions, emojiAnimation } from "./tools";

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

emojiAnimation();