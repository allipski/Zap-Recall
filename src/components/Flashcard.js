import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

export default function Flashcard() {
    const [contador, setContador] = React.useState(0)
    const [icon, setIcon] = React.useState('');
    const [color, setColor] = React.useState('');

    if (contador === 0) {
        return (
            <First contador={contador} setContador={setContador} />
        )
    } else if (contador === 1) {
        return (
            <Second contador={contador} setContador={setContador} />
        )
    } else if (contador === 2) {
        return (
            <Third
                contador={contador}
                setContador={setContador}
                setIcon={setIcon}
                setColor={setColor}
            />
        )
    } else {
        return (
            <Fourth color={color} icon={icon}/>
        )
    }
}