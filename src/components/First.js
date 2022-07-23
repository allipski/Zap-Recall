export default function First({questionid, contador, setContador}) {
    return (
        <>
            <div className="cardclosed" onClick={() => setContador(contador + 1)}>
                <p>Pergunta {questionid}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
    )
}