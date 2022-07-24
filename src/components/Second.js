import turn from '../assets/images/turn.svg'

export default function Second({pergunta, contador, setContador}) {
    return (
        <>
            <div className="cardopen">
                <p>{pergunta}</p>
                <img onClick={() => setContador(contador + 1)} className="turn" src={turn} />
            </div>
        </>
    )
}