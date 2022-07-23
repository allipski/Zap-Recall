import React from "react";
import Telaflash from "./Telaflash";
import logo from '../assets/images/logo.png'

let cont = 0;
export default function App() {
    const [go, setGo] = React.useState(true);
    return (
        <>
            {go ? 
            <div className="master">
            <img className="logo" src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={() => {
                if (cont === 0) {
                    setGo(!go);
                    cont++;
                }
            }
            } className="startbutton">Iniciar Recall!</button>
            </div>
            : <Telaflash />}
        </>
    )
}