import turn from '../assets/images/turn.svg'

export default function Second({pergunta, contador, setContador}) {
    return (
        <>
            <div className="cardopen" onClick={() => setContador(contador + 1)}>
                <p>{pergunta}</p>
                <img className="turn" src={turn} />
            </div>
        </>
    )
}