export default function Fourth({ questionid, color, icon }) {
    return (
        <>
            <div className={`cardclosed2 ${color}`}>
                <p>Pergunta {questionid}</p>
                <ion-icon name={icon}></ion-icon>
            </div>
        </>
    )
}