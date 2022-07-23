export default function First({contador, setContador}) {
    return (
        <>
            <div className="cardclosed" onClick={() => setContador(contador + 1)}>
                <p>Pergunta X</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
    )
}