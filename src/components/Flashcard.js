import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

export default function Flashcard({ seq, setSeq, done, setDone, questionid, pergunta, resposta }) {
    const [contador, setContador] = React.useState(0);
    const [color, setColor] = React.useState('');
    const [icon, setIcon] = React.useState('');

    if (contador === 0) {
        return (
            <First questionid={questionid} contador={contador} setContador={setContador} />
        )
    } else if (contador === 1) {
        return (
            <Second pergunta={pergunta} contador={contador} setContador={setContador} />
        )
    } else if (contador === 2) {
        return (
            <Third
                seq={seq}
                setSeq={setSeq}
                resposta={resposta}
                contador={contador}
                setContador={setContador}
                setIcon={setIcon}
                icon={icon}
                setColor={setColor}
                done={done}
                setDone={setDone}
            />
        )
    } else {
        return (
            <Fourth questionid={questionid} color={color} icon={icon} />
        )
    }
}