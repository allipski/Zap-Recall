import turn from '../assets/images/turn.svg'

export default function Second({ contador, setContador }) {
    return (
        <>
            <div className="cardopen" onClick={() => setContador(contador + 1)}>
                <p>Pergunta X</p>
                <img className="turn" src={turn} />
            </div>
        </>
    )
}