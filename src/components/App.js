import React from "react";
import Telaflash from "./Telaflash";
import Telainicial from "./Telainicial";

let cont = 0;
export default function App() {
    const [go, setGo] = React.useState(true);
    return (
        <>
            {go ? <Telainicial cont={cont} go={go} setGo={setGo} /> : <Telaflash />}
        </>
    )
}