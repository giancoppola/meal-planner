import { StrictMode } from "react";
import { Container } from "react-dom";
import { createRoot, Root } from "react-dom/client"

let test: string = "test";

// const bgGradient = "background: hsla(177, 87%, 79%, 1); background: linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%); background: -moz-linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%); background: -webkit-linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%); filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#9bf8f4", endColorstr="#6f7bf7", GradientType=1 );"

const App = () => {
    return (
        <StrictMode>
            <h1>HELL0 THERE</h1>
        </StrictMode>
    )
}

const appContainer: Container = document.getElementById("app")!;
const root: Root = createRoot(appContainer);
root.render(<App/>);