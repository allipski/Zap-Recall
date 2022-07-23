export default function Second({ resposta, contador, setContador, setIcon, setColor }) {
    return (
        <>
            <div className="cardopen2">
                <p>{resposta}</p>
                <div className="botoes">
                    <button onClick={() => { setContador(contador + 1); setColor("red1"); setIcon("close-circle") }} className="red">Não lembrei</button>
                    <button onClick={() => { setContador(contador + 1); setColor("orange1"); setIcon("help-circle") }} className="orange">Quase não lembrei</button>
                    <button onClick={() => { setContador(contador + 1); setColor("green1"); setIcon("checkmark-circle") }} className="green">Zap!</button>
                </div>
            </div>
        </>
    )
}