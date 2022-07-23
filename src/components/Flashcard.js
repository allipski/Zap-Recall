import React from "react"
import turn from '../assets/images/turn.svg'

export default function Flashcard() {
    const [status, setStatus] = React.useState(0)

    if (status === 0) {
        return (
            <>
                <div className="cardclosed" onClick={() => setStatus(status + 1)}>
                    <p>Pergunta X</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </>
        )
    } else if (status === 1) {
        return (
            <>
                <div className="cardopen" onClick={() => setStatus(status + 1)}>
                    <p>Pergunta X</p>
                    <img className="turn" src={turn} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="cardopen2" onClick={() => setStatus(status + 1)}>
                    <p>Pergunta X</p>
                    <div className="botoes">
                        <button className="red">Não lembrei</button>
                        <button className="orange">Quase não lembrei</button>
                        <button className="green">Zap!</button>
                    </div>
                </div>
            </>
        )
    }
}